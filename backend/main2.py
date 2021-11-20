from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/chatbot',methods=['GET','POST','OPTIONS'])
@cross_origin()
def get_chatbot_response():
    print(request.args.get('msg'))
    d = {}
    d["type"] = "bot"
    d["text"] = "Hello boy"

    return d


if __name__ == "__main__":
        app.run(host='0.0.0.0',debug=False,port=8080)