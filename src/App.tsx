import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Missioni from './Missioni';
import Navbar from './Navbar';
import Navicelle from './Navicelle';

function App() {
  return (
    <div>
      
      <Navbar />
      
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/navicelle"><Navicelle /></Route>
        <Route exact path="/missioni"><Missioni /></Route>
      </Switch>

      
    </div>
  );
}
export default App;
