import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Nav from './Nav'
import Body from './Body'
import ding1 from './images/ding.png'
import ding2 from './images/ding2.png'

function App() {
  
  return (
    <div className="App">
      <div className="container">
        <Nav></Nav>
        <Body></Body>
      </div>
      {/* <div id="note"> 
      <b>This website was designed and built by Michelle Ding. Last updated October 2025.</b>
      </div> */}
    </div>
    
  );
}

export default App;
