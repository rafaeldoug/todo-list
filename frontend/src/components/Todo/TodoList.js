import React, { useEffect, useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useParams } from "react-router";
import { getTasksByCategoryId, updateTask } from '../../service/TaskListService';
import { getCategoryById } from '../../service/CategoriesService';
import './styles.css';

export default function TodoList() {

  let { id } = useParams();

  const history = useHistory();

  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState({ name: '' });
  const [newTodo, setNewTodo] = useState("");
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    setTodos(getTasksByCategoryId(id));
    setCategory(getCategoryById(id));
  }, [id]);

  const toggleCompleteTodo = (todoId) => {
    console.log('toogle');

    setTodos(todos.map(t => {
      if (t.id === todoId) {
        t.isComplete = !t.isComplete;
      }
      return t;
    }));

    // updateTask(todoId);

  }

  const deleteTodo = (todoId) => {
    let newTodos = todos.filter(t => t.id !== todoId);
    setTodos([...newTodos]);
  }

  const addTodo = () => {
    let id = todos.length;
    setTodos([...todos, { id: id, name: newTodo }]);
    setPopupActive(false);
  }

  const voltar = () => {
    history.push('/');
  };

  return (
    <div>
      <div className="todo-list-header">
        <ArrowBackIcon onClick={() => voltar()}/>
        <h4>{category.name}</h4>
      </div>
      <div className="todos">
        {todos.map(todo => (
          <div className="todo-container" key={todo.id}>
            <div className={`todo ${todo.isComplete ? 'is-complete' : ''}`} onClick={() => toggleCompleteTodo(todo.id)}>
              <div className="checkbox"></div>

              <div className="text">{todo.name}</div>
            </div>
            <div>
              <IconButton aria-label="delete" className="delete-todo" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon fontSize="small" color="secondary" />
              </IconButton>
            </div>
          </div>
        ))}
      </div>

      <div className="addPopup" onClick={() => setPopupActive(true)} >+</div>

      {popupActive ? (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>x</div>
          <div className="content">
            <h3>Adicionar Tarefa</h3>
            <input
              type="text"
              className="add-input"
              onChange={e => setNewTodo(e.target.value)}
              value={newTodo} />
            <div className="button" onClick={addTodo}>Criar Tarefa</div>
          </div>
        </div>
      ) : ''}
    </div>

  )

}