import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Index from './components/Index/Index'
import Paragraph from './components/Paragraph/Paragraph'
import Recommend from './components/Recommend/Recommend'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
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
