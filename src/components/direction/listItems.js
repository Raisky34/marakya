import React from 'react';
import Item from './item';

export default class oldDirections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: [
        {
          image: 'Зумба',
          title: 'Зумба',
          litleText: 'Зумба - это сравнительно молодое танцевальное направление, автором которого в 2001 году стал Альберто Перез, колумбийский хореограф-танцор. Эта фитнес-программа сочетает в себе элементы хип-хопа, сальсы, самбы, меренге, мамбо, фламенко и танца живота.'
        },
        {
          image: 'Зумба',
          title: 'Зумба',
          litleText: 'Зумба - это сравнительно молодое танцевальное направление, автором которого в 2001 году стал Альберто Перез, колумбийский хореограф-танцор. Эта фитнес-программа сочетает в себе элементы хип-хопа, сальсы, самбы, меренге, мамбо, фламенко и танца живота.'
        },
        {
          image: 'Зумба',
          title: 'Зумба',
          litleText: 'Зумба - это сравнительно молодое танцевальное направление, автором которого в 2001 году стал Альберто Перез, колумбийский хореограф-танцор. Эта фитнес-программа сочетает в себе элементы хип-хопа, сальсы, самбы, меренге, мамбо, фламенко и танца живота.'
        },
        {
          image: 'Зумба',
          title: 'Зумба',
          litleText: 'Зумба - это сравнительно молодое танцевальное направление, автором которого в 2001 году стал Альберто Перез, колумбийский хореограф-танцор. Эта фитнес-программа сочетает в себе элементы хип-хопа, сальсы, самбы, меренге, мамбо, фламенко и танца живота.'
        },
        {
          image: 'Зумба',
          title: 'Зумба',
          litleText: 'Зумба - это сравнительно молодое танцевальное направление, автором которого в 2001 году стал Альберто Перез, колумбийский хореограф-танцор. Эта фитнес-программа сочетает в себе элементы хип-хопа, сальсы, самбы, меренге, мамбо, фламенко и танца живота.'
        },
        {
          image: 'Зумба',
          title: 'Зумба',
          litleText: 'Зумба - это сравнительно молодое танцевальное направление, автором которого в 2001 году стал Альберто Перез, колумбийский хореограф-танцор. Эта фитнес-программа сочетает в себе элементы хип-хопа, сальсы, самбы, меренге, мамбо, фламенко и танца живота.'
        },
        {
          image: 'Зумба',
          title: 'Зумба',
          litleText: 'Зумба - это сравнительно молодое танцевальное направление, автором которого в 2001 году стал Альберто Перез, колумбийский хореограф-танцор. Эта фитнес-программа сочетает в себе элементы хип-хопа, сальсы, самбы, меренге, мамбо, фламенко и танца живота.'
        },
        {
          image: 'Зумба',
          title: 'Зумба',
          litleText: 'Зумба - это сравнительно молодое танцевальное направление, автором которого в 2001 году стал Альберто Перез, колумбийский хореограф-танцор. Эта фитнес-программа сочетает в себе элементы хип-хопа, сальсы, самбы, меренге, мамбо, фламенко и танца живота.'
        },
        {
          image: 'Зумба',
          title: 'Зумба',
          litleText: 'Зумба - это сравнительно молодое танцевальное направление, автором которого в 2001 году стал Альберто Перез, колумбийский хореограф-танцор. Эта фитнес-программа сочетает в себе элементы хип-хопа, сальсы, самбы, меренге, мамбо, фламенко и танца живота.'
        },
        {
          image: 'Зумба',
          title: 'Зумба',
          litleText: 'Зумба - это сравнительно молодое танцевальное направление, автором которого в 2001 году стал Альберто Перез, колумбийский хореограф-танцор. Эта фитнес-программа сочетает в себе элементы хип-хопа, сальсы, самбы, меренге, мамбо, фламенко и танца живота.'
        },
      ]
    }
  }

  openPopup() {
    console.log("open");
  }

  render() {
    return(
      <div className="itemsContainer">
      {
        this.state.directions.map((item) => {
          return <Item item={item} />;
        })
      }
      </div>
    );
  }
}
