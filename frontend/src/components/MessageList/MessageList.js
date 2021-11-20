import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import "./MessageList.css";
import Bot from '../MessageBox/Bot';
import User from '../MessageBox/User';

const spinner = require('../../assets/spinner.svg');

class MessageList extends Component {

  componentDidUpdate = () => {
    this.node.scrollTop = this.node.scrollHeight
  }

  render() {
    return (
      <div className="messageList_wrapper">
        <div className="messageList__container" ref={(node) => (this.node = node)}>
          {this.props.messages.map(message => {
            return (
              <Animated animationIn="bounceInLeft" animationInDuration={ 500 } isVisible={true}>
                <div className="messageList__box" >
                  {message.type === "bot" ? (
                    <Bot {...message}/>
                  ) : (
                    <User {...message}/>
                  )}
                </div>
              </Animated>
            )
          })}
          {this.props.isBotLoading && <div className="messageList__loading">
            <img className="messageList__spinner" src={spinner} alt=""/>
          </div>}
        </div>
      </div>
    )
  }
}

export default MessageList;
