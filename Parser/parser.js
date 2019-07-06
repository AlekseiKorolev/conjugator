//work with https://espanol.lingolia.com/es/gramatica/conjugador via node.js
/*console.log('We start');
import url from 'https://espanol.lingolia.com/es/gramatica/conjugador';
const inputBar = url.querySelector('#search_verb_input');
const submitButton = url.querySelector('#conjugator_submit');
console.log(url);*/

const rp = require('request-promise');
const url = 'http://es.conjug.com/verbo.php?v=abandonar';

rp(url)
  .then(function(html){
    //success!
    console.log(html);
  })
  .catch(function(err){
    //handle error
  });

/*var page = require('webpage').create();
page.open('https://espanol.lingolia.com/es/gramatica/conjugador', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});*/
