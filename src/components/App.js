import React from 'react';
import Header from './plugins/header';
import Footer from './plugins/footer';
class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <div className="notice">
            <Header/>
            {this.props.children}
            <Footer/>
        </div>
      </div>
    );
  }
}


export default AppComponent;
