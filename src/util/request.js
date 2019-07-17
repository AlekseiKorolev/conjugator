import Dict from './Dict';

function requestMood(mood, key){
  if(key){
    switch(mood){
      case 'Indicativo': return 'Indicative';
      case 'Subjuntivo': return 'Subjunctive';
      case 'Imperativo Positivo': return 'Imperative Affirmative';
      case 'Imperativo Negativo': return 'Imperative Negative';
    }
  }else{
    switch(mood){
      case 'Indicative': return 'Indicativo';
      case 'Subjunctive': return 'Subjuntivo';
      case 'Imperative Affirmative': return 'Imperativo Positivo';
      case 'Imperative Negative': return 'Imperativo Negativo';
    }
  }
}

function requestTense(tense, key){
  if(key){
    switch(tense){
      case 'Pretérito Indefinido': return 'Preterite';
      case 'Pretérito Perfecto': return 'Present Perfect';
      case 'Pretérito Imperfecto': return 'Imperfect';
      case 'Pretérito Pluscuamperfecto': return 'Past Perfect';
      case 'Pretérito Anterios': return 'Preterite (Archaic)';
      case 'Presente': return 'Present';
      case 'Gerundio': return 'Gerund';
      case 'Futuro Simple': return 'Future';
      case 'Futuro Compuesto': return 'Future Perfect';
      case 'Condicional Simple': return 'Conditional';
      case 'Condicional Compuesto': return 'Conditional Perfect';
      default: return '';
    }
  }else{
    switch(tense){
      case 'Preterite': return 'Pretérito Indefinido';
      case 'Present Perfect': return 'Pretérito Perfecto';
      case 'Imperfect': return 'Pretérito Imperfecto';
      case 'Past Perfect': return 'Pretérito Pluscuamperfecto';
      case 'Preterite (Archaic)': return 'Pretérito Anterios';
      case 'Present': return 'Presente';
      case 'Gerund': return 'Gerundio';
      case 'Future': return 'Futuro Simple';
      case 'Future Perfect': return 'Futuro Compuesto';
      case 'Conditional': return 'Condicional Simple';
      case 'Conditional Perfect': return 'Condicional Compuesto';
      default: return '';
    }
  }
}

export const Verb = function (allTenses, allPersons){
  const allVerbs = Object.keys(Dict);
  let reqPerson,
    reqTense,
    reqMood,
    verb,
    person,
    tense,
    answer;
  do {
    person = allPersons[Math.floor(Math.random()*allPersons.length)];
    tense = allTenses[Math.floor(Math.random()*allTenses.length)];
    verb = allVerbs[Math.floor(Math.random()*allVerbs.length)];

    reqPerson = person.split(' ')[1].toLowerCase();
    reqMood = tense.includes('Imperativo')  ? tense : tense.split(' ')[0];
    reqTense = tense.split(' ').slice(1).join(' ');

    reqMood = requestMood(reqMood, true);
    reqTense = requestTense(reqTense, true);

    try{
      if(reqMood.split(' ')[0] !== 'Imperative'){
        answer = Dict[verb][reqPerson][reqMood][reqTense]
      }else{
        answer = Dict[verb][reqPerson][reqMood].Present
      }
    }catch(error){
      console.warn(error.message)
    }

  }while(!answer)

  return {
    inputEnable: true,
    submitEnable: false,
    answer: answer,
    showAnswer: false,
    submitClass: '',
    inputValue: '',
    task: {
      person: reqPerson,
      verb: verb,
      tense: requestMood(reqMood, false) + ' ' + requestTense(reqTense, false),
      status: true,
    },
  }
}
