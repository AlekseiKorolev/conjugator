import React from 'react';
import './Challenge.css';
import { Options } from '../Options/Options';
import { TaskBar } from '../TaskBar/TaskBar';

export class Challenge extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className="challenge">
        <Options />
        <TaskBar myProp="Hi"/>
      </div>
    )
  }
}
