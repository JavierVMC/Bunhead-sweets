export const Category = ({ category }) => {
  const { id, name } = category || {
    id: 'Cargando...',
    name: 'Cargando...'
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
    </tr>
  );
};
