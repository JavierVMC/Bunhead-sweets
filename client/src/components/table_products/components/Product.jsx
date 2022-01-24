import { useEffect } from 'react';
import { useState } from 'react';
import { BsToggleOn } from 'react-icons/bs';
import { BsToggleOff } from 'react-icons/bs';

import './product.css';

export const Product = ({ product }) => {
  const { id, name, category_id, description, price, is_available } =
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

  useEffect(() => {
    async function getCategory() {
      fetch(`http://localhost:3001/api/product_category/${category_id}`)
        .then((response) => response.json())
        .then((data) => setCategory(data.name))
        .catch((err) => console.log(err));
    }
    getCategory();
  }, []);

  useEffect(() => {
    async function getCategories() {
      fetch('http://localhost:3001/api/product_category')
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((err) => console.log(err));
    }
    getCategories();
  }, [editing]);

  return !editing ? (
    <tr
      id={`product-row-${id}`}
      onDoubleClick={() => {
        setEditing(true);
      }}
    >
      <td className="cell" id="product-id-cell">
        {id}
      </td>
      <td className="cell" id="product-name-cell">
        {name}
      </td>
      <td className="cell" id="product-category-cell">
        <div>
          <span>{category}</span>
        </div>
      </td>
      <td className="cell" id="product-description-cell">
        {description}
      </td>
      <td className="cell" id="product-price-cell">
        $ {price}
      </td>
      <td className="cell toggle-cell">
        {is_available ? <BsToggleOn></BsToggleOn> : <BsToggleOff></BsToggleOff>}
      </td>
    </tr>
  ) : (
    <tr id={`product-row-${id}`}>
      <td className="cell" id="product-id-cell">
        {id}
      </td>
      <td className="cell" id="product-name-cell">
        <input type="text" defaultValue={name}></input>
      </td>
      <td className="cell" id="product-category-cell">
        <select defaultValue={category}>
          {categories.map((data, i) => (
            <option value={data.name} key={i}>
              {data.name}
            </option>
          ))}
        </select>
      </td>
      <td className="cell" id="product-description-cell">
        <textarea rows="5" cols="150" defaultValue={description}></textarea>
      </td>
      <td className="cell" id="product-price-cell">
        <input type="number" defaultValue={price}></input>
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
    </tr>
  );
};
