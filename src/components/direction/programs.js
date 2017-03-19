import React from 'react';
import ListItems from './listItems';

export default class Program extends React.Component{
  render() {
    return(
      <div className="direction">
        <div className="title">Программы</div>
        <ListItems />
      </div>
    );
  }
}
