import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import './styles.css';
import Input from "../Input";

const API_URL = "http://localhost:5000";

const HOME_SUBTITLE = "Suas Listas";

export default function CategoriesList() {

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    async function carregarCategorias() {
      const { data } = await axios.get(`${API_URL}/lists`);
      setCategories(data);
    }
    carregarCategorias();
  }, []);

  const addCategory = async () => {
    const { data } = await axios.post(`${API_URL}/lists/new`, { name: newCategory });
    setCategories([...categories, data]);
    setNewCategory('');
    setPopupActive(false);
  }

  const deleteCategory = async (categoryId) => {
    await axios.delete(`${API_URL}/lists/${categoryId}`);
    let newCategories = categories.filter(t => t._id !== categoryId);
    setCategories(newCategories);
  }

  return (
    <>
      <h4>{HOME_SUBTITLE}</h4>
      {categories.map(c => (
        <div className="category-container" key={c._id}>
          <Link className="category" to={`/tasks/lists/${c._id}`} >
            <div className="text">{c.name}</div>
          </Link>
          <div className="btn-container">
            <IconButton aria-label="delete" className="delete-list" onClick={() => deleteCategory(c._id)} >
              <DeleteIcon fontSize="medium" color="secondary" />
            </IconButton>
          </div>
        </div>
      ))}

      <div className="addPopup" onClick={() => setPopupActive(true)} >+</div>

      {popupActive ? (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>x</div>
          <Input
            title={"Adicionar Lista"}
            buttonLabel={"Criar Lista"}
            setValue={e => setNewCategory(e.target.value)}
            newItem={newCategory}
            addItem={addCategory} />
        </div>
      ) : ''}

    </>
  )

}