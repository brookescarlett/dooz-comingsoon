import React, { Component } from 'react';
import SideBar from './components/SideBar'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="background-img fixed top-0 left-0 right-0 bottom-0">
        <div className="container flex flex-column items-around">
          <SideBar />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
