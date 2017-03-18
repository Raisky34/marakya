import React from 'react';

import Contact from './home/contact';
import Info from './home/info';

export default class Home extends React.Component{
  render() {
    return(
      <div>
        Home page
        <Info />
        <Contact />
      </div>
    );
  }
}
