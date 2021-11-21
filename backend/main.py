#Import libraries
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
import nltk
nltk.download('punkt')
import datetime
from nltk.stem.lancaster import LancasterStemmer
import numpy as np
import tflearn
import tensorflow as tf
import random
import json
import pickle
import requests

stemmer = LancasterStemmer()

with open("model/intents.json") as file:
    data = json.load(file)
with open("model/data.pickle","rb") as f:
    words, labels, training, output = pickle.load(f)

# Converting message into bag of words
def bag_of_words(s, words):
    bag = [0 for _ in range(len(words))]
    
    s_words = nltk.word_tokenize(s)
    s_words = [stemmer.stem(word.lower()) for word in s_words]

    for se in s_words:
        for i,w in enumerate(words):
            if w == se:
                bag[i] = 1

    return np.array(bag)

tf.compat.v1.reset_default_graph()

net = tflearn.input_data(shape = [None, len(training[0])])
net = tflearn.fully_connected(net,8)
net = tflearn.fully_connected(net,8)
net = tflearn.fully_connected(net,len(output[0]), activation = "softmax")
net = tflearn.regression(net)

#Loading existing model from disk
model = tflearn.DNN(net)
model.load("model/model.tflearn")


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

searchurl = "https://api.themoviedb.org/3/search/movie?api_key=3d8f29ed921ca581c56e31c9754cd386&language=en-US&query="

@app.route('/chatbot',methods = ['POST', 'GET'])
@cross_origin()
def get_chatbot_response():
    message = request.json.get('msg')
    if message:
        message = message.lower()
        results = model.predict([bag_of_words(message,words)])[0]
        result_index = np.argmax(results)
        tag = labels[result_index]
        resp = {}
        resp["type"] = "bot"
        if results[result_index] > 0.5:
            if tag == "recommendations":
                if 'as' in message:
                    movie_name = message.split('as')[1].strip()
                elif 'like' in message:
                    movie_name = message.split('like')[1].strip()
                else:
                    return "No such movie found!"
                
                r = requests.get(url = searchurl+movie_name)
                movieData = r.json()
                if(len(movieData['results']))==0:
                    resp["text"] = "Please enter the correct Movie Name"
                    return resp
                id = movieData['results'][0]['id']
                r = requests.get(url = f'https://api.themoviedb.org/3/movie/{id}/recommendations?api_key=3d8f29ed921ca581c56e31c9754cd386&language=en-US&page=1')
                recommendData = r.json()
                s = "The recommended movies are :-\n"
                n = len(recommendData['results'])
                if n> 5:
                    n = 5
                for i in range(n):
                    s+= f"{i+1}. {recommendData['results'][i]['original_title']}\n"
                resp["text"] = s
            else:
                for tg in data['intents']:
                    if tg['tag'] == tag:
                        responses = tg['responses']
                resp["text"] = random.choice(responses)

        else:
            resp["text"] = "I didn't quite get that, please try again."
        
        return resp
    return "resp"

if __name__ == "__main__":
        app.run(host='0.0.0.0',debug=False,port=8080)