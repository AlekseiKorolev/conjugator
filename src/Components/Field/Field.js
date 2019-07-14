import React from 'react';
import './Field.css';

export class Field extends React.Component {

  handleInput(e){
    const value = e.target.value;
    this.props.onChange(value);
  }

  handleSubmit(e){
    const answer = document.querySelector('#field').value.toLowerCase();
    this.props.onSubmit(answer);
  }

  render(){
    return (
      <div className="field">
        <input type="text" id="field" onChange={ this.handleInput.bind(this) }
          disabled={ !this.props.inputEnable }
          value={ this.props.inputValue }/>
        <input type="submit" value=" "
          className={ this.props.submitClass }
          disabled={ !this.props.submitEnable }
          onClick={ this.handleSubmit.bind(this) }/>
      </div>
    )
  }
}
