import './cartItem.css';

export const CartItem = ({ item }) => {
  const { name, image, category, price, description } = item || {
    name: 'Cargando...',
    image: 'Cargando...',
    category: 'Cargando...',
    price: 'Cargando...',
    description: 'Cargando...',
    quantity: 0
  };

  return (
    <li className="product row">
      <div className="col-12 col-md-10">
        <div className="col-12 col-md-4 image-container">
          <img src={image} alt={name}></img>
        </div>
        <div className="text-align-left col-12 col-md-8">
          <h2 className="h2">{name}</h2>
          <p className="badge bg-secondary">{category}</p>
          <p>{description}</p>
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue="1"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          {' | '}
          <button type="button" className="btn btn-link">
            Eliminar
          </button>
        </div>
      </div>
      <div className="col-12 col-md-2">
        <p className="price">$ {price}</p>
      </div>
      <hr></hr>
    </li>
  );
};
