import React from 'react';
import './TaskBar.css';

export class TaskBar extends React.Component {

  render(){
    const string1 = JSON.stringify(this.props);
    return (
      <div className="taskBar">
        <div className='task'>Task bar</div>
        <input type="text"/>
        {string1}
      </div>
    )
  }
}
