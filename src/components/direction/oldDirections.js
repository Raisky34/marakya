import React from 'react';
import ListItems from './listItems';

export default class oldDirections extends React.Component{
  render() {
    return(
      <div className="direction">
        <div className="title">Направления</div>
        <ListItems />
      </div>
    );
  }
}
