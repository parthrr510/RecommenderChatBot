#Import libraries
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
import nltk
nltk.download('punkt')
import datetime
from nltk.stem.lancaster import LancasterStemmer
import numpy as np
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
        resp = {}
        resp["type"] = "bot"
        resp["text"] = "Not Working"
        return resp
    return "resp"

if __name__ == "__main__":
        app.run(host='0.0.0.0',debug=False,port=8080)