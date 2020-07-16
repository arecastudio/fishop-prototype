import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Navtop from './components/Navtop';
import Home from './components/Home';

function App() {
  return (
    <div className="">
      <Navtop/>
      <Home/>
      

    </div>
  );
}

export default App;
