import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

export default function CategoryItem({ category }) {

  return (
    <Link to={`/lists/${category.id}/tasks`}>
      <div className="todo">
        <div className="text">{category.name}</div>

        <div className="delete-todo">x</div>
      </div>
    </Link>
  )

}