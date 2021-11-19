import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import RotaPrivada from './componentes/RotaPrivada';

import Header from './components/Header';
import CategoriesList from './components/Categories/CategoriesList';
import TodoList from './components/Todo/TodoList';
import Login from './componentes/Login';
import NaoEncontrada from './componentes/NaoEncontrada';
import {SegurancaProvider} from './contextos/SegurancaContext';

const HOME_TITLE = "To-Do List";

function App() {

  return (
    <SegurancaProvider>

    <Router>
      <div className="principal">
        <Link to="/">
          <Header title={HOME_TITLE} />
        </Link>
        <Switch>
          <RotaPrivada path="/" exact={true}>
            <CategoriesList />
          </RotaPrivada>
          <RotaPrivada path="/tasks/lists/:id">
            <TodoList />
          </RotaPrivada>
          <Route path="/login"><Login/></Route>
          <Route path="*"><NaoEncontrada/></Route>
        </Switch>

      </div>
    </Router>
    </SegurancaProvider>

  );
}

export default App;
