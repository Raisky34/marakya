import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component{
  render() {
    return(
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Marakya</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/">О нас</Link></li>
                  <li><Link to="/direction">Направления</Link></li>
                  <li><Link to="/about">About</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="tel:+375(29)126-49-79">Телефон:+375(29)126-49-79</a></li>
                </ul>
              </div>
            </div>
          </nav>
          {this.props.children}
      </div>
    );
  }
}
