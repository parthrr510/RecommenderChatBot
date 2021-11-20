import React, { Component } from 'react';
import './Bot.css';
import { Radio } from 'antd';

const botLogo = require('../../assets/chatBotLogo.svg');

const radioStyle = {
  display: 'block',
  height: '25px',
  lineHeight: '30px',
};

const config = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 50,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

class Bot extends Component {
  state = {
    timeStamp: "",
    answer: null,
    isAnswerSelected: false
  }

  formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    const strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
  }

  componentDidMount = () => {
    let date = new Date();
    this.setState({ timeStamp: this.formatAMPM(date) });
  }

  render(){
    const botText = document.querySelector(".bot__text");

    let logo = botLogo;
    let cursorType = "default";
    let messageMarginTop = "auto";
    let messageMarginBottom = "auto";

    if (this.props.options.length === 3) {
      messageMarginTop = "-40px";
    } else {
      messageMarginTop = "-10px"
    }
    messageMarginBottom = "35px";


    return(
      <div className="bot__container" style={{ cursor: cursorType, marginBottom: messageMarginBottom }}>
        <img className="bot__img" src={logo} alt="bot" style={{ marginTop: messageMarginTop }}></img>
        <div className="bot__text-wrapper">
          <div className="bot__name">MovieBot {this.state.timeStamp}</div>
          <div className="bot__text">{this.props.text}</div>
        </div>
      </div>
    )
  }
}

export default Bot;
