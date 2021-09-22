import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/Todo/TodoList';
import CategoriesList from './components/Categories/CategoriesList';
import Header from './components/Header';
import { getCategories } from './service/CategoriesService';

const API_URL = "http://localhost:5000";
const HOME_TITLE = "To-Do List";
const HOME_SUBTITLE = "Suas Listas";

function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  return (
    <Router>
      <div className="principal">
        <Link to="/">
          <Header title={HOME_TITLE}/>
        </Link>
        <Switch>
          <Route path="/" exact={true}>
            <CategoriesList categories={categories} subtitle={HOME_SUBTITLE}/>
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
