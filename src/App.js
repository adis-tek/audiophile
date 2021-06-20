import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Headphones from './pages/headphones/headphones.jsx';
import Speakers from './pages/speakers/speakers.jsx';
import Earphones from './pages/earphones/earphones.jsx';
import MarkTwo from './pages/xx99-mark-two/x99MarkTwo.jsx';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/headphones" component={Headphones} />
        <Route exact path="/headphones/mark-two" component={MarkTwo} />
      <Route exact path="/speakers" component={Speakers} />
      <Route exact path="/earphones" component={Earphones} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
