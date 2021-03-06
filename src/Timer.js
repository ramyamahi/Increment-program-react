import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
       timer : 0
    };
  } 
timerStart = () => {
  return(
    this.setState({timer: Date()})
  );
}  
  render() {    
    return (       
    	<div>
        <h1>Timer</h1>
        <button onClick={this.timerStart.bind(this)}>Start</button>
        <input type='text' value={this.state.timer}></input>
      </div>
    );
  }
}

export default TodoList;
