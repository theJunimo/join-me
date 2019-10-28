import React from 'react';
import { Route, Switch } from 'react-router';
import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path = '/' component = {MainPage} exact/>
      <Route path = '/login' component = {LoginPage} exact/> 
    </Switch>
  );
}

export default App;
