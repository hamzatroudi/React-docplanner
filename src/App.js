import React, { Component } from 'react';
import './App.css';
import List from './list';
import Barre from './barre';
import SecOne from './section1';
import Carte from './carteviste';
import SecTwo from './section2';
import SecThree from './section3';
import SecFour from './section4';
import Footer from './footer';




class App extends Component {
  render() {
    return (
      <div className="App">
      <Barre/>
      <SecOne/>
      <Carte/>
      <SecTwo/>
      <SecThree/>
      <SecFour/>
      <List/>
      <Footer/>
      
      
      </div>
    );
  }
}

export default App;
