import React from 'react';
import { Route } from 'react-router';
import '../content/styles/main.scss';
import Navbar from './Navbar';
import Example from './Example';
import Home from './Home';

const App = () => (
  <div>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/example" component={Example} />
  </div>
);

export default App;
