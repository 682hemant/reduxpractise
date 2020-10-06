import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactPage from './components/containers/Form';
import Counter from './components/counter/Counter';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/containers/Dashboard';

function App() {
  return (
    <div className="App">
      <h1 className="text-danger">redux practise</h1>
      <Switch>
        <Route exact path="/">
          <ContactPage />
          <Counter />
        </Route>
        <Route  path="/dashboard">
           <Dashboard />
          </Route>

      </Switch>

    </div>
  );
}

export default App;
