<h1 align="center">
  <br>
  Movie Recommender Chatbot
  <br>
</h1>

<h3 align="center">Youtube: <a href="https://youtu.be/Oq4CDvWxnYQ">Link</a></h3>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<div align="center">

![Python](https://img.shields.io/badge/python-3.9.1-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)
[![License](https://img.shields.io/badge/license-%20GPL--3.0%20-blue)](https://github.com/parthrr510/AudioAnalyser/blob/main/LICENSE)

</div>

<div align="justify">

>Movie Recommender Chatbot is a chatbot in which interacts with the user and recommend them movies on the basis of their watch history. 
>The user interacts with the chatbot tells it about the movie he has watched and then the chatbot recommends the user similar movies.
>The backend is made on Flask Server and frontend is made on ReactJS and TMDB API is used for the recommendations.
</div>


<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#ml-models-used">ML-DL Model</a> •
  <a href="#io-screenshots">I/O Screenshots</a> •
  <a href="#flowchart">Methodology Flowchart </a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#license">License</a>
</p>

<div id = "key-features" align="justify">
  
## Key Features

* Movie Recommender
  * User interacts with the chatbot and tells the bot about the movies he had watched and then the bot let them know similar movies they can watch.
  * The project used Flask,ReactJS and TMDB API.
</div>

<div id = "ml-models-used" align="justify">
  
## ML-DL Model

The jupyter notebook in the ML Folder named  `Chatbot.ipynb` contains the code for Chatbot model.

* Deep Learning Model
  * It is built on tflearn library which is the deep learning library built on the top of tensorflow.
  * The model uses FullyConnected Layers out of which two are hidden layers and one gives the target probabilities and have softmax function.
  * We have saved the tflearn model built on the intents.json dataset and used it in the flask application.
  *  It gives the accuracy of 99.38%.
</div>

<div align="justify" id="io-screenshots">

## Input-Output Screenshots
![I/O Screenshots](https://github.com/parthrr510/RecommenderChatBot/blob/main/images/InputOutput.gif)
</div>

<div align="justify" id = "flowchart">

## Methodology Flowchart

![MainFlowChart](https://github.com/parthrr510/RecommenderChatBot/blob/main/images/FlowChart.png)
</div>
<div id = "how-to-use" align="justify">
  
## How to Use
The steps involved to run the application are:<br>
*You must have git and python and node.js installed on your machine*
1. Clone the repository.

#### Backend
1. Create a Virtual Environment using following commands
  ```bash
pip install virtualenv
virtualenv venv
```
2. Go to the `backend` Directory.
3. Install the dependencies from `requirements.txt`
```bash
pip install -r requirements.txt
```
3. Run the server using the following command:
```bash
python main.py
```
This will run the `backend` server.
#### Frontend
1. Go to the `frontend` directory.
2. Run the following command to install all the dependencies from `package.json`.
```bash 
yarn install
 ```
OR
```bash 
npm install
 ```
Run the command according to whichever package manager you use.
3. Run the frontend server by running the following command:
```bash 
yarn start
 ```
OR
```bash 
npm start
 ```
This will start the `frontend` server and now you can use the chatbot.

**To make any changes in the project,Create a issue and then a pull request for that issue**

</div>


<div id = "license"  align="justify">
 
## License
 
`Movie Recommender Chatbot` is free and open-source software licensed under the GPL-3.0 License.

</div>
