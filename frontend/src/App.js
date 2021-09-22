import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header';
import CategoriesList from './components/Categories/CategoriesList';
import TodoList from './components/Todo/TodoList';

const HOME_TITLE = "To-Do List";

function App() {

  return (
    <Router>
      <div className="principal">
        <Link to="/">
          <Header title={HOME_TITLE} />
        </Link>
        <Switch>
          <Route path="/" exact={true}>
            <CategoriesList />
          </Route>
          <Route path="/tasks/lists/:id">
            <TodoList />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
