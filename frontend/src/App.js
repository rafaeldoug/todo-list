import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { useState, useEffect } from 'react';
import TodoList from './components/Todo/TodoList';
import CategoriesList from './components/Categories/CategoriesList';
import Header from './components/Header';

const HOME_TITLE = "To-Do List";

function App() {

  return (
    <Router>
      <div className="principal">
        <Link to="/">
          <Header title={HOME_TITLE}/>
        </Link>
        <Switch>
          <Route path="/" exact={true}>
            {/* <CategoriesList categories={categories} subtitle={HOME_SUBTITLE}/> */}
            <CategoriesList />
          </Route>
          <Route path="/lists/:id/tasks">
            <TodoList />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
