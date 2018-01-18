import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LivingRoom from './components/LivingRoom.js';
import HouseRules from './components/HouseRules.js';
import Container from './components/Container.js';
import Kitchen from './components/Kitchen.js';
import Sitting from './components/Sitting.js';
import Backyard from './components/Backyard.js';


ReactDOM.render(
  <BrowserRouter>
  <Container>
    <Switch>
      <Route path='/LivingRoom' component={LivingRoom}/>
      <Route path='/Kitchen' component ={Kitchen}/>
      <Route path='/Sitting' component={Sitting}/>
      <Route path='/Backyard' component={Backyard}/>
      <Route exact path='/' component={HouseRules}/>
    </Switch>
  </Container>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
