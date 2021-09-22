import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles.css';

export default function CategoriesList({ categories, subtitle }) {

  const [componentCategories, setComponentCategories] = useState([]);
  const [newCategory, setNewCategories] = useState("");
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    setComponentCategories(categories);
  }, [categories]);

  const deleteCategory = (categoryId) => {
    let newCategories = componentCategories.filter(t => t.id !== categoryId);
    console.log(newCategories);
    setComponentCategories([...newCategories]);
  }

  const addCategory = () => {
    let id = componentCategories.length;
    setComponentCategories([...componentCategories, { id: id, name: newCategory }]);
    setPopupActive(false);
  }

  return (
    <>
      <h4>{subtitle}</h4>
      {componentCategories.map(c => (
        <div className="category-container" key={c.id}>
          <Link className="category" to={`/lists/${c.id}/tasks`} >
            <div className="text">{c.name}</div>
          </Link>
          <div>
            <IconButton aria-label="delete" className="delete-list" onClick={() => deleteCategory(c.id)}>
              <DeleteIcon fontSize="small" color="secondary" />
            </IconButton>
          </div>
        </div>
      ))}

      <div className="addPopup" onClick={() => setPopupActive(true)} >+</div>

      {popupActive ? (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>x</div>
          <div className="content">
            <h3>Adicionar Categoria</h3>
            <input
              type="text"
              className="add-input"
              onChange={e => setNewCategories(e.target.value)}
              value={newCategory} />
            <div className="button" onClick={addCategory}>Criar Categoria</div>
          </div>
        </div>
      ) : ''}
    </>
  )

}