import React from 'react';
import { useSelector } from 'react-redux'

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { selectSendMailOpen } from './features/mailSlice';


import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Mail from './components/Mail/Mail'
import MailList from './components/MailList/MailList'
import SendMail from './components/SendMail/SendMail'

import './App.css';

const App = () => {
  
  const sendMailOpen = useSelector(selectSendMailOpen)

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/" exact component={MailList} />
            <Route path="/mail" exact component={Mail} />
          </Switch>

        </div>

        { sendMailOpen && <SendMail />}
      </div>
    </Router>
    
  );
}

export default App;
