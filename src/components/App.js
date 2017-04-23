import React from 'react';
import YeomanImage from './YeomanImage';
//import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <div className="notice">
            {this.props.children}
        </div>
      </div>
    );
  }
}


export default AppComponent;
