import React, { useEffect, useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useParams } from "react-router";
import axios from 'axios';

import './styles.css';
import Input from "../Input";

const API_URL = "http://localhost:5000";

export default function TodoList() {

  let { id: listId } = useParams();

  const history = useHistory();

  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState('');
  const [newTodo, setNewTodo] = useState("");
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    async function getTasksByCategoryId() {
      const { data } = await axios.get(`${API_URL}/tasks/lists/${listId}`);
      setTodos(data);
    }

    async function getCategoryById() {
      const { data } = await axios.get(`${API_URL}/lists/${listId}`);
      setCategory(data);
    }
    getTasksByCategoryId();
    getCategoryById();
  }, [listId]);

  const toggleCompleteTodo = async (todoId) => {

    const { data } = await axios.put(`${API_URL}/tasks/${todoId}/complete`);

    setTodos(() => todos.map(t => {
      if (t._id === data._id) {
        t.isComplete = data.isComplete;
      }
      return t;
    }));

  }

  const deleteTodo = async (todoId) => {
    await axios.delete(`${API_URL}/tasks/${todoId}`);
    setTodos(todos.filter(t => t._id !== todoId));
  }

  const addTodo = async () => {

    const { data } = await axios.post(`${API_URL}/tasks/new`, { name: newTodo, listId: listId });
    setTodos([...todos, data]);
    setNewTodo('');
    setPopupActive(false);
  }

  const voltar = () => {
    history.push('/');
  };

  return (
    <div>
      <div className="todo-list-header">
        <ArrowBackIcon onClick={() => voltar()} />
        <h4>{category.name}</h4>
      </div>
      <div className="todos">
        {todos.map(todo => (
          <div className="todo-container" key={todo._id}>
            <div className={`todo ${todo.isComplete ? 'is-complete' : ''}`} onClick={() => toggleCompleteTodo(todo._id)}>
              <div className="checkbox"></div>

              <div className="text">{todo.name}</div>
            </div>
            <div>
              <IconButton aria-label="delete" className="delete-todo" onClick={() => deleteTodo(todo._id)}>
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
          <Input 
            title={"Adicionar Tarefa"} 
            buttonLabel={"Criar Tarefa"} 
            setValue={e => setNewTodo(e.target.value)} 
            newItem={newTodo} 
            addItem={addTodo} />
        </div>
      ) : ''}
    </div>

  )

}