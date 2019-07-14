import React from 'react';
import './Task.css';

export class Task extends React.Component {


  render(){
    let task;
    if(this.props.taskSettings.status){
      task = (
        <div className="task">
          {this.props.taskSettings.person}
          &nbsp;<span className="bold">{this.props.taskSettings.verb}</span>&nbsp;
          {this.props.taskSettings.tense}
        </div>
      )
    }else{
      task = <div className="notice">Elige tiempos y personas y empuje un botón</div>
    }
    return  task
  }
}
