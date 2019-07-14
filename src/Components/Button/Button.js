import React from 'react';
import './Button.css';

export class Button extends React.Component {
  render(){
    return (
      <button disabled={ !this.props.setEnable }
        onClick={ this.props.createTask }>
        Empezar
      </button>
    )
  }
}
