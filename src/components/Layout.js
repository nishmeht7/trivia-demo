import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class Layout extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

Layout.propTypes =  {
  children: React.PropTypes.object
};


export default Layout;
