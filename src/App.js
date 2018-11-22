import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/containers/Header'
import Body from './components/containers/Body'
import Footer from './components/containers/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header></Header>
          <Body></Body>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;