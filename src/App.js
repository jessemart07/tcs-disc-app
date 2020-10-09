import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DISCQuestions from './containers/DISCQuestions/DISCQuestions';
import DISCResult from './containers/DISCResult/DISCResult';
import './App.css';

function App() {
  let routes = (
    <Switch>
      <Route path="/"  exact component={DISCQuestions}/>
      <Route path="/result" component={DISCResult}/>
    </Switch>
  )
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default App;
