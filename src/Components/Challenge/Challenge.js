import React from 'react';
import './Challenge.css';
import { Verb } from './../../util/request';
import { Options } from '../Options/Options';
import { Button } from '../Button/Button';
import { Task } from '../Task/Task';
import { Field } from '../Field/Field';
import { Answer } from '../Answer/Answer';

export class Challenge extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tenses: [],
      persons: [],
      buttonEnabled: false,
      submitEnable: false,
      inputEnable: false,
      inputValue: '',
      submitClass: '',
      answer: '',
      showAnswer: false,
      task: {
        person: '',
        verb: '',
        tense: '',
        status: false,
      },
    };
    this.changeOptions = this.changeOptions.bind(this);
    this.createTask = this.createTask.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  changeOptions(value, key){
    const currentArray = key === 'Personas' ? 'persons' : 'tenses';
    const otherArray = key === 'Personas' ? 'tenses' : 'persons';
    let newSelectedOption;
    if(Array.isArray(value)){//group slect
      newSelectedOption = value.slice().map( item => key + ' ' + item);
      const checkForFill = newSelectedOption.every( item => this.state[currentArray].indexOf(item) !== -1)
      if(checkForFill){
        newSelectedOption = this.state[currentArray].filter( item => {
          if(newSelectedOption.indexOf(item) === -1){
            return item
          }
        })
      }else{
        newSelectedOption.push(...this.state[currentArray].filter( item => {
          if(newSelectedOption.indexOf(item) === -1){
            return item
          }
        }))
      }
    }else{//single select
      const index = this.state[currentArray].indexOf(value);
      newSelectedOption = this.state[currentArray].slice();
      if(index === -1){
          newSelectedOption.push(value);
      }else{
          newSelectedOption.splice(index, 1);
      }
    }

    const buttonStatus = this.state[otherArray].length !== 0 && newSelectedOption.length !== 0;
    const inputStatus = buttonStatus ? this.state.inputEnable : buttonStatus;
    this.setState({
      [currentArray]: newSelectedOption,
      buttonEnabled: buttonStatus,
      inputEnable: inputStatus,
      task: {
        status: false,
      }
     });
  }

  createTask(){
    this.setState(Verb(this.state.tenses, this.state.persons))
  }

  inputOnChange(value){
    this.setState({
      inputValue: value,
      submitEnable: value.length !== 0 ? true : false
    })
  }

  submitAnswer(inputValue){
    const check = inputValue === this.state.answer;
    this.setState({
        submitClass: check ? 'match' : 'notmatch',
        showAnswer: true,
      });
  }

  render(){
    return (
      <div className="challenge">
        <Options setChangeOptions = { this.changeOptions }
          setGroupChanges = { this.groupGhanges }
          selectedOptions = { this.state.tenses + this.state.persons }/>
        <Button setEnable={ this.state.buttonEnabled }
          createTask={ this.createTask }/>
        <Task taskSettings = { this.state.task }/>
        <Field inputValue = { this.state.inputValue }
          submitClass = { this.state.submitClass }
          inputEnable = {this.state.inputEnable }
          submitEnable = { this.state.submitEnable }
          onChange = { this.inputOnChange }
          onSubmit = { this.submitAnswer }/>
        <Answer showAnswer = { this.state.showAnswer }
          answer = { this.state.answer }/>
      </div>
    )
  }
}
