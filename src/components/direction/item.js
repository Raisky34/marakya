import React from 'react';

export default class oldDirections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick(e) {
    console.log('open');
  }

  handleClose(e) {
    this.setState({open: false});
  }

  render() {
    return(
          <div className="itemContainer" onClick={this.handleClick.bind(this)}>
            <div className="itemTitle">{this.props.item.title}</div>
            <div className="itemText">{this.props.item.litleText}</div>
          </div>
    );
  }
}
