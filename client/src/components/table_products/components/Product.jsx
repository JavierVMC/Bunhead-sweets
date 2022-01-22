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
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{category_id}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>{is_available ? 'Si' : 'No'}</td>
    </tr>
  );
};
