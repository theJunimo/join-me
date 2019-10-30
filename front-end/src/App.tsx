import React from 'react';
import { Route, Switch } from 'react-router';
import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';
import WritePage from 'pages/WritePage';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path = '/' component = {MainPage} exact/>
      <Route path = '/login' component = {LoginPage} exact/> 
      <Route path = '/write' component = {WritePage} exact/>
    </Switch>
  );
}

export default App;
