import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:5000";

function App() {

  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    GetLists();
  }, []);

  const GetLists = () => {
    axios.get(`${API_URL}/lists`, ({ data }) => {
      console.log(data);
    });
  }


  return (
    <div className="App">
      <h1>To-do List</h1>
      <h4>Suas tarefas</h4>

      <div className="todos">

        <div className="todo">
          <div className="checkbox"></div>

          <div className="text">Fazer projeto</div>

          <div className="delete-todo">x</div>
        </div>

        <div className="todo is-complete">
          <div className="checkbox"></div>

          <div className="text">Pagar os boleto</div>

          <div className="delete-todo">x</div>
        </div>

      </div>

    </div>
  );
}

export default App;
