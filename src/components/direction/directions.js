import React from 'react';
import OldDirections from './oldDirections';
import Programs from './programs';

export default class Directions extends React.Component{
  render() {
    return(
      <div className="main">
        <OldDirections />
        <Programs />
      </div>
    );
  }
}
