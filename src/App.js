import React from 'react';
import { useSelector } from 'react-redux'
import Login from './components/Login/Login'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { selectSendMailOpen } from './features/mailSlice';


import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Mail from './components/Mail/Mail'
import MailList from './components/MailList/MailList'
import SendMail from './components/SendMail/SendMail'
import { selectUser } from './features/userSlice'

import './App.css';

const App = () => {  
  const sendMailOpen = useSelector(selectSendMailOpen)
  const user = useSelector(selectUser)

  return (
    <Router>
      {!user ? (<Login />) : (
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
      )}
    </Router>
    
  );
}

export default App;
