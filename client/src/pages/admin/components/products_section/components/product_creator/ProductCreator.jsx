import { useEffect, useState } from 'react';

import './productCreator.css';

export const ProductCreator = () => {
  const [creating, setCreating] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [categories, setCategories] = useState([]);
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    if (generating) {
      const name = document.querySelector('#title-new-product').value;
      const price = document.querySelector('#price-new-product').value;
      const description = document.querySelector(
        '#description-new-product'
      ).value;
      const is_available = true;
      const category_id = document.querySelector(
        '#categoryid-new-product'
      ).value;
      const image = imageName;

      async function createNewProduct() {
        fetch('http://localhost:3001/api/product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            price: price,
            description: description,
            image: image,
            is_available: is_available,
            category_id: category_id
          })
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      }

      createNewProduct();
      setCreating(true);
    }
  }, [generating]);

  useEffect(() => {
    async function getCategories() {
      fetch('http://localhost:3001/api/product_category')
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((err) => console.log(err));
    }
    getCategories();
  }, []);

  return (
    <div id="product-creator-container">
      {!creating ? (
        <>
          <h2>Crear nuevo producto</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setGenerating(true);
            }}
          >
            <div>
              <label htmlFor="title-new-product">Nombre: </label>
              <br></br>
              <input type="text" id="title-new-product" required></input>
            </div>
            <div>
              <label htmlFor="description-new-product">Descripcion: </label>
              <br></br>
              <textarea
                rows="5"
                cols="150"
                id="description-new-product"
              ></textarea>
            </div>
            <div>
              <label htmlFor="price-new-product">Precio: </label>
              <br></br>
              <input type="number" id="price-new-product"></input>
            </div>
            <div>
              <label htmlFor="categoryid-new-product">Categoria: </label>
              <br></br>
              <select id="categoryid-new-product">
                {categories.map((data, i) => (
                  <option value={data.id} key={i}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                required
                type="file"
                id="imageUpload"
                accept=".jpg, .jpeg"
                onChange={(event) => {
                  const files = event.target.files;
                  const formData = new FormData();
                  formData.append('image', files[0]);

                  fetch('http://localhost:3001/api/image', {
                    method: 'POST',
                    body: formData
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      setImageName(data.filename);
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }}
              />
              <label htmlFor="imageUpload"></label>
            </div>

            <button type="submit" className="btn btn-primary">
              Crear producto
            </button>
          </form>
        </>
      ) : (
        <>
          <span>Producto creado exitosamente</span>
          <button
            className="btn btn-primary"
            onClick={() => {
              setCreating(false);
              setGenerating(false);
            }}
          >
            Crear otro producto
          </button>
        </>
      )}
    </div>
  );
};
