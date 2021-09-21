import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTasksByCategoryId, updateTask } from '../../service/TaskListService';
import { getCategoryById } from '../../service/CategoriesService';

export default function TodoList() {

  let { id } = useParams();

  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState({ name: '' });

  useEffect(() => {
    setTodos(getTasksByCategoryId(id));
    setCategory(getCategoryById(id));
  }, [id]);

  // const renderTaskListItem = (item) => {
  //   return (
  //     <Todo todoItem={item} key={item.id} isComplete={item.isComplete}/>
  //   );
  // };

  const toggleCompleteTodo = (todoId) => {
    console.log('heeeein?!');
    updateTask(todoId);
    setTodos(getTasksByCategoryId(id));
  }

  const deleteTodo = (todoId) => {
    let newTodos = todos.filter(t => t.id !== todoId);
    console.log(newTodos);
    setTodos([...newTodos]);
  }

  return (
    <div>
      <h4>{category.name}</h4>
      <div className="todos">
        {todos.map(todo => (
          <div className={`todo ${todo.isComplete ? 'is-complete' : ''}`} onClick={() => toggleCompleteTodo(todo.id)} key={todo.id}>
            <div className="checkbox"></div>

            <div className="text">{todo.name}</div>

            <div className="delete-todo" onClick={() => deleteTodo(todo.id)}>x</div>
          </div>
        ))}
      </div>
    </div>

  )

}