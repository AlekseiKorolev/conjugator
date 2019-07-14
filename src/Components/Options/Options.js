import React from 'react';
import AllOptions from './../../util/options';
import './Options.css';

export class Options extends React.Component {

  getClassName(value){
    const index = this.props.selectedOptions.indexOf(value);
    if(index === -1) {
      return ''
    }else{
      return 'active'
    }
  }

  handleClickItem(value, key){
    this.props.setChangeOptions(value, key)
  }

  renderList(){
    return Object.keys(AllOptions).map( key => {
      let list = [];
      list.push(<li key={ key }
        className="listName"
        onClick={ this.handleClickItem.bind(this, AllOptions[key], key) }>{ key }</li>);
      for(let item of AllOptions[key]){
        list.push(
          <li key={ item }
            className={ 'listItem ' + this.getClassName(key + ' ' + item) }
            onClick={ this.handleClickItem.bind(this, key + ' ' + item, key) }>
            { item }
          </li>
        )
      }
      return <ul key={key}>{ list }</ul>
    });
  }

  render(){
    return (
      <div className="options">
        {this.renderList()}
      </div>
    )
  }
}
