import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Index from './components/Index/Index'
import Paragraph from './components/Paragraph/Paragraph'
import Recommend from './components/Recommend/Recommend'

import './font-awesome/css/font-awesome.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename={`/`}>
        <Route exact path='/'>
          <Index />
        </Route>
        <Route path='/paragraph/:id'>
          <Paragraph />
        </Route>
        <Route path='/recommend/:id'>
          <Recommend />
        </Route>
      </Router>
    </div>
  );
}

export default App;
