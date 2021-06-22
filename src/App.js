import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Headphones from './pages/headphones/headphones.jsx';
import Speakers from './pages/speakers/speakers.jsx';
import Earphones from './pages/earphones/earphones.jsx';
import MarkTwo from './pages/xx99-mark-two/x99MarkTwo.jsx';
import MarkOne from './pages/xx99-mark-one/x99MarkOne.jsx';
import XX59 from './pages/xx59-headphones/xx59.jsx';
import ZX9 from './pages/zx9-speaker/zx9.jsx';
import ZX7 from './pages/zx7-speaker/zx7.jsx';
import YX1 from './pages/yx1-earphones/yx1.jsx';
import Checkout from './pages/checkout/checkout.jsx'

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/headphones" component={Headphones} />
        <Route exact path="/headphones/mark-two" component={MarkTwo} />
        <Route exact path="/headphones/mark-one" component={MarkOne} />
        <Route exact path="/headphones/xx59" component={XX59} />
      <Route exact path="/speakers" component={Speakers} />
        <Route exact path="/speakers/zx9" component={ZX9} />
        <Route exact path="/speakers/zx7" component={ZX7} />
      <Route exact path="/earphones" component={Earphones} />
        <Route exact path="/earphones/yx1" component={YX1} />
      <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
