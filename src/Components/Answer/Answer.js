import React from 'react';
import './Answer.css';

export class Answer extends React.Component {
  render(){
    return(
      <div>
        <div className="answer" hidden={ !this.props.showAnswer }>
          <b>{ this.props.answer }</b>
          <i>{this.props.showAnswer}</i>
        </div>
      </div>
    )
  }
}
