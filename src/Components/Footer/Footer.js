import React from 'react';
import './Footer.css';

export class Footer extends React.Component {
  render(){
    return(
      <footer>
        by <a href="mailto: aleksei.nik.korolev@gmail.com">Aleksei Korolev</a> 2019
        based on <a rel="cc:attributionURL" property="cc:attributionName" href="http://www.ghidinelli.com/spanish-conjugated-verb-database">Fred Jehle</a>
      </footer>
    )
  }
}
