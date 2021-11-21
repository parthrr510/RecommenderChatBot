import React, { Component } from 'react';
import MessageForm from './components/MessageForm/MessageForm';
import MessageList from './components/MessageList/MessageList';
import { BASE_URL, showMessage, REQUEST_ERROR } from './constants';

import './App.css';
const logo = require('./assets/logo.svg');
const movieLogo = require('./assets/film-projector.svg');
class App extends Component {

  state = {
    messages: [],
    activeMessage: null,
    lastMessage: null,
    name: "",
    isBotLoading: false,
    activeIndex: 0,
    toggle: true,
    movie: "",
    currentIndex: 0,
  }

  sendMessage = message => {
    this.setState({
      messages: [...this.state.messages, message],
      isBotLoading: true
    });
    
    console.log("The message is " + message.text);
    fetch(`${BASE_URL}/chatbot`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "msg": message.text
      })
    })
    .then(response => response.status!= 200 ? Promise.reject() : response.json())
    .then(data => {
      const botMessage = data;
      this.setState({
        isBotLoading: false,
        messages : [...this.state.messages,botMessage],
      });
      console.log(this.state.messages[0]);
    })
    .catch(error => {
      console.log("The error is " + error);
      showMessage(REQUEST_ERROR);
      this.setState({ isBotLoading: false, });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 left">
              <div className="app__logo--container">
                <img src={logo} alt=""/>
                <h2>Recommender Chatbot</h2>
              </div>
              <div className="app__menu--container">
              <img src={movieLogo} alt=""/>
              </div>
            </div>

            <div className="col-8 right">
              <div className="app__top-div">
                <MessageList isBotLoading={this.state.isBotLoading} messages={this.state.messages}/>
              </div>
              <div className="app__bottom-div">
                <MessageForm sendMessage={this.sendMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;