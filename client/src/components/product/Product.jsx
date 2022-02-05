import './product.css';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getImage } from '../../utils/rest_api.js';

const Product = ({ product, currentUser }) => {
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
  const [productImage, setProductImage] = useState('');

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const [response, error] = await getImage(
        `http://localhost:3001/api/image/${image}`
      );
      if (error) console.log(error);
      else {
        setProductImage(response);
      }
    }
    fetchData();
  }, [image]);

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
    console.log('en el useEffect');
    if (addedToCart) {
      async function addToCart(id) {
        fetch(`http://localhost:3001/api/cart/${currentUser.user_email}`)
          .then((response) => response.json())
          .then((cart) => {
            console.log('fetch raro');
            console.log(cart);
            const c = cart[0];
            fetch('http://localhost:3001/api/cart_items', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                user_email: currentUser.user_email,
                product_id: id,
                cart_id: c.id
              })
            })
              .then((reponse) => reponse.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
      addToCart(id);
    }
  }, [addedToCart]);

  useEffect(() => {
    console.log('en el useEffect');
    if (!addedToCart) {
      async function addToCart(id) {
        fetch(`http://localhost:3001/api/cart_items/${currentUser.user_email}`)
          .then((response) => response.json())
          .then((cart) => {
            console.log('fetch raro');
            console.log(cart);
            const c = cart[0];
            fetch('http://localhost:3001/api/cart_items', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                user_email: currentUser.user_email,
                product_id: id,
                cart_id: c.id
              })
            })
              .then((reponse) => reponse.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
      addToCart(id);
    }
  }, [addedToCart]);

  return (
    <li className="product row">
      <div className="col-12 col-md-3">
        <img src={productImage} alt={name}></img>
      </div>
      <div className="text-align-left col-12 col-md-7">
        <h2 className="h2">{name}</h2>
        <p className="badge bg-secondary">{categoryName}</p>
        <p className="price">$ {price}</p>
        <p>{description}</p>
      </div>
      <div className="col-12 col-md-2">
        {!addedToCart && !currentUser.is_admin ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setAddedToCart(true)}
          >
            Agregar al carrito
          </button>
        ) : (
          ''
        )}
      </div>
      <hr></hr>
    </li>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.userR.currentUser
});

export default connect(mapStateToProps)(Product);
