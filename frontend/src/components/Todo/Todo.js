// import React, { useEffect, useState } from "react";
// import { updateTask } from "../../service/TaskListService";

// export default function Todo({ todoItem, isComplete }) {

//   const [todo, setTodo] = useState(todoItem);

//   // useEffect(() => {
//   //   setComplete(todo.isComplete ? 'is-complete' : '');
//   // }, [todo.isComplete]);

//   const completeTodo = (id) => {
//     setTodo(updateTask(id));
//     // setComplete(todo.isComplete ? 'is-complete' : '');
//   }

//   return (
//     <div className={`todo ${isComplete ? 'is-complete' : ''}`} onClick={() => completeTodo(todoItem.id)}>
//       <div className="checkbox"></div>

//       <div className="text">{todo.name}</div>

//       <div className="delete-todo">x</div>
//     </div>
//   )

// }