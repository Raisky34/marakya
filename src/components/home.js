import React from 'react';

import Contact from './home/contact';
import Info from './home/info';

export default class Home extends React.Component{
  render() {
    return(
      <div className="main">
        Home page
        <Info />
        <Contact />
      </div>
    );
  }
}
