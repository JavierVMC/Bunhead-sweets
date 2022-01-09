export const User = ({ user }) => {
  const {
    user_email,
    first_name,
    last_name,
    phone,
    country,
    city,
    street,
    is_admin
  } = user || {
    user_email: 'Cargando...',
    first_name: 'Cargando...',
    last_name: 'Cargando...',
    phone: 'Cargando...',
    country: 'Cargando...',
    city: 'Cargando...',
    street: 'Cargando...',
    is_admin: 'Cargando...'
  };
  return (
    <tr>
      <td>{user_email}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{phone}</td>
      <td>{country}</td>
      <td>{city}</td>
      <td>{street}</td>
      <td>{is_admin ? 'Admin' : 'Cliente'}</td>
    </tr>
  );
};
