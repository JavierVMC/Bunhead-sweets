import './product.css';
import { useState, useEffect } from 'react';

const Product = ({ product }) => {
  const { id, name, category_id, image, description, price } = product || {
    id: 'Cargando...',
    name: 'Cargando...',
    image: 'Cargando...',
    category_id: 'Cargando...',
    price: 'Cargando...',
    description: 'Cargando...'
  };
  const [categoryName, setCategoryName] = useState(category_id);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    async function getCategoryName() {
      fetch(`http://localhost:3001/api/product_category/${category_id}`)
        .then((response) => response.json())
        .then((data) => setCategoryName(data.name))
        .catch((err) => console.log(err));
    }
    getCategoryName();
  }, [category_id]);

  useEffect(() => {
    async function addToCart(id) {
      fetch('url de aaron')
        .then((response) => response.json())
        .then((data) => {
          fetch('url de aaron', {
            method: 'POST',
            body: JSON.stringify(data)
          });
        })
        .catch((err) => console.log(err));
    }
  }, [addedToCart]);

  return (
    <li className="product row">
      <div className="col-12 col-md-3">
        <img src={image} alt={name}></img>
      </div>
      <div className="text-align-left col-12 col-md-7">
        <h2 className="h2">{name}</h2>
        <p className="badge bg-secondary">{categoryName}</p>
        <p className="price">$ {price}</p>
        <p>{description}</p>
      </div>
      <div className="col-12 col-md-2">
        {!addedToCart ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setAddedToCart(true)}
          >
            Agregar al carrito
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setAddedToCart(false)}
          >
            Sacar del carrito
          </button>
        )}
      </div>
      <hr></hr>
    </li>
  );
};

export default Product;
