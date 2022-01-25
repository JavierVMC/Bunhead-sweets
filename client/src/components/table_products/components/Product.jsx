import { useEffect } from 'react';
import { useState } from 'react';
import { BsToggleOn } from 'react-icons/bs';
import { BsToggleOff } from 'react-icons/bs';

import './product.css';

export const Product = ({ product }) => {
  const { id, name, category_id, image, description, price, is_available } =
    product || {
      id: 'Cargando...',
      name: 'Cargando...',
      category_id: 'Cargando...',
      description: 'Cargando...',
      price: 'Cargando...',
      is_available: 'Cargando...'
    };

  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState(undefined);
  const [editing, setEditing] = useState(false);
  const [isAvailable, setIsAvailable] = useState(is_available);
  const [update, setUpdate] = useState(false);

  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newPrice, setNewPrice] = useState(price);
  const [newCategoryId, setNewCategoryId] = useState(category_id);

  useEffect(() => {
    async function getCategory() {
      fetch(`http://localhost:3001/api/product_category/${newCategoryId}`)
        .then((response) => response.json())
        .then((data) => setCategory(data.name))
        .catch((err) => console.log(err));
    }
    getCategory();
  }, [newCategoryId]);

  useEffect(() => {
    async function getCategories() {
      fetch('http://localhost:3001/api/product_category')
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((err) => console.log(err));
    }
    getCategories();
  }, [editing]);

  useEffect(() => {
    if (update) {
      const row = document.querySelector(`#product-row-${id}`);

      const name = row.children[0].children[0].value;
      const category_id = row.children[1].children[0].value;
      const description = row.children[2].children[0].value;
      const price = row.children[3].children[0].value;

      setNewName(name);
      setNewDescription(description);
      setNewPrice(parseFloat(price));
      setNewCategoryId(parseInt(category_id));

      console.log(row.children[3].children[0]);
      console.log({
        name: name,
        category_id: parseInt(category_id),
        description: description,
        price: parseFloat(price),
        is_available: isAvailable
      });
      setEditing(false);

      async function updateProductInfo() {
        fetch(`http://localhost:3001/api/product/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            category_id: parseInt(category_id),
            description: description,
            price: parseFloat(price),
            image: image,
            is_available: isAvailable
          })
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      }

      updateProductInfo();
    }
  }, [id, update]);

  return !editing ? (
    <tr
      id={`product-row-${id}`}
      onDoubleClick={() => {
        setEditing(true);
        if (update) setUpdate(false);
      }}
    >
      <td className="cell" id="product-name-cell">
        {newName}
      </td>
      <td className="cell" id="product-category-cell">
        <div>
          <span>{category}</span>
        </div>
      </td>
      <td className="cell" id="product-description-cell">
        {newDescription}
      </td>
      <td className="cell" id="product-price-cell">
        $ {newPrice}
      </td>
      <td className="cell toggle-cell">
        {isAvailable ? <BsToggleOn></BsToggleOn> : <BsToggleOff></BsToggleOff>}
      </td>
    </tr>
  ) : (
    <tr id={`product-row-${id}`}>
      <td className="cell" id="product-name-cell">
        <input type="text" defaultValue={newName}></input>
      </td>
      <td className="cell" id="product-category-cell">
        <select defaultValue={newCategoryId}>
          {categories.map((data, i) => (
            <option value={data.id} key={i}>
              {data.name}
            </option>
          ))}
        </select>
      </td>
      <td className="cell" id="product-description-cell">
        <textarea rows="5" cols="150" defaultValue={newDescription}></textarea>
      </td>
      <td className="cell" id="product-price-cell">
        <input type="number" defaultValue={newPrice}></input>
      </td>
      <td className="cell toggle-cell">
        <button
          className="button-toggle-product"
          onClick={() => {
            setIsAvailable(!isAvailable);
          }}
        >
          {isAvailable ? (
            <BsToggleOn></BsToggleOn>
          ) : (
            <BsToggleOff></BsToggleOff>
          )}
        </button>
      </td>
      <td className="cell edit-buttons-container">
        <button
          className="btn btn-primary"
          onClick={() => {
            setUpdate(true);
          }}
        >
          Guardar
        </button>
        <button
          className="button-cancel-update-product"
          onClick={() => {
            setEditing(false);
          }}
        >
          Cancelar
        </button>
      </td>
    </tr>
  );
};
