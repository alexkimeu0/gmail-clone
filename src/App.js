import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Mail from './components/Mail/Mail'
import MailList from './components/MailList/MailList'



import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/">
              <MailList />
            </Route>
            <Route path="/mail">
              <Mail />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
    
  );
}

export default App;
