import React from 'react';
import './Options.css';

export class Options extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      classActive: ['Indicativo Presente','Personas Yo','Otros opciones Mostrar respuesta']
    };
    this.options = {
      Indicativo: [
        'Preterito Indefinido',
        'Preterito Perfecto',
        'Preterito Imperfecto',
        'Preterito Pluscuamperfecto',
        'Preterito anterios',
        'Presente',
        'Gerundio',
        'Futuro Proximo',
        'Futuro Simple',
        'Futuro Compuesto',
        'Condicional simple',
        'Condicional compuesto',
        ],
      Subjuntivo: [
        'Presente',
        'Preterito Imperfecto',
        'Preterito Perfecto',
        'Preterito Pluscuamperfecto'
      ],
      Imperativo: [
        'Positivo',
        'Negativo'
      ],
      Personas: [
          'Yo',
          'Tu',
          'El/Ella/Usted',
          'Nosotros',
          'Vosotros',
          'Ellos/ellas/Ustedes',
      ],
      'Otros opciones': [
        'Traduccion',
        'Mostrar respuesta'
      ]
    }
    //this.handlerClickItem = this.handlerClickItem.bind(this);
  }


  getClassName(value){
    const index = this.state.classActive.indexOf(value);
    if(index === -1) {
      return ''
    }else{
      return 'active'
    }
  }

  handlerClickItem(value){
    const index = this.state.classActive.indexOf(value);
    const newClassActive = this.state.classActive.slice();
    if(index === -1){
      newClassActive.push(value);
      this.setState({classActive: newClassActive});
    }else{
      newClassActive.splice(index,1);
      this.setState({classActive: newClassActive});
    }
  }

  renderList(){
    return Object.keys(this.options).map( key => {
      let list = [];
      list.push(<li className="listName" key={key}>{key}</li>);
      for(let item of this.options[key]){
        list.push(
          <li key={item}
            className={'listItem ' + this.getClassName(key + ' ' + item)}
            onClick={this.handlerClickItem.bind(this, key + ' ' + item)}>
            {item}
          </li>
        )
      }
      return <ul key={key}>{ list }</ul>
    });
  }

  getTime(){
    const times = this.state.classActive.filter( time => {
      if(time.indexOf('Person') === -1 && time.indexOf('Otros') === -1) {
        return time;
      }
    })
    console.log(times)
    
  }

  render(){
    return (
      <div>
        <div className="options">
          {this.renderList()}
        </div>
        <button disabled={this.state.classActive.length === 0 ? true : false}
          onClick={this.getTime.bind(this)}>
          EMPEZAR
        </button>
      </div>
    )
  }
}
