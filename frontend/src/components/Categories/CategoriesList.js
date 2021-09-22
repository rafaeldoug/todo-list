import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import './styles.css';

const API_URL = "http://localhost:5000";

const HOME_SUBTITLE = "Suas Listas";

export default function CategoriesList() {

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({});
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    async function carregarCategorias() {
      const {data} = await axios.get(`${API_URL}/lists`);
      setCategories(data);
    }
    carregarCategorias();
  }, []);

  const addCategory = async () => {
    const addedCategory = await axios.post(`${API_URL}/lists/new`, {name: newCategory});
    setCategories([...categories, addedCategory]);
    setPopupActive(false);
  }

  const deleteCategory = async (categoryId) => {
    await axios.delete(`${API_URL}/lists/${categoryId}`);
    let newCategories = categories.filter(t => t._id !== categoryId);
    setCategories(newCategories);
  }

  console.log(categories);

  return (
    <>
      <h4>{HOME_SUBTITLE}</h4>
      {categories.map(c => (
        <div className="category-container" key={c._id}>
          <Link className="category" to={`/lists/${c._id}/tasks`} >
            <div className="text">{c.name}</div>
          </Link>
          <div>
            <IconButton aria-label="delete" className="delete-list" onClick={() => deleteCategory(c._id)} >
            {/* <IconButton aria-label="delete" className="delete-list" > */}
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
              onChange={e => setNewCategory(e.target.value)}
              value={newCategory} />
            <div className="button" onClick={addCategory}>Criar Categoria</div>
          </div>
        </div>
      ) : ''}
    </>
  )

}