import './product.css';

const Product = ({ product }) => {
  const { name, image, category, price, description } = product || {
    name: 'Cargando...',
    image: 'Cargando...',
    category: 'Cargando...',
    price: 'Cargando...',
    description: 'Cargando...'
  };

  return (
    <li className="product row">
      <div className="col-12 col-md-3">
        <img src={image} alt={name}></img>
      </div>
      <div className="text-align-left col-12 col-md-7">
        <h2 className="h2">{name}</h2>
        <p className="badge bg-secondary">{category}</p>
        <p className="price">$ {price}</p>
        <p>{description}</p>
      </div>
      <div className="col-12 col-md-2">
        <button type="button" className="btn btn-primary">
          Agregar al carrito
        </button>
      </div>
      <hr></hr>
    </li>
  );
};

export default Product;
