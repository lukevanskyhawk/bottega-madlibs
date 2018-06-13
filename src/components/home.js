import React, { Component } from "react";

import Header from './header'

class Home extends Component {
  render() {
    return (
      <div className="home">
        {Header('Bottega Madlibs')}
        {Header('Whatever I want')}
      </div>
    );
  }
}

export default Home;