import React from 'react';
import Router from './routes/router'
import ModifiedWheel from './components/ModifiedWheel'
import SVG from './components/svg tryouts/SVG'
//import Test from './components/svg tryouts/Test'
import SVG_Product from './components/svg tryouts/SVG_Products'
import './assets/css/style.css'

function App() {
  return (
    // <Router />

    <div className="svg-wrapper" style={{backgroundColor:""}}>
      
      <SVG_Product id="1"/>
      <SVG_Product id="2"/>

      {/* <Test /> */}

      
    </div>
  );
}

export default App;
