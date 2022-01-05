import { connect } from 'react-redux';
import './userInfo.css';

const UserInfo = ({ users }) => {
  return users ? (
    <div id="componentePerfil">
      <h1>Perfil</h1>

      <div className="flex-container row">
        <div className="col-12 col-md-3" id="imagenPerfil">
          <img src={users[0].image} alt="foto de perfil"></img>
        </div>

        <div id="datosPerfil" className="col-12 col-md-9">
          <h3>Información Personal</h3>
          <p id="nombre">Nombre: {users[0].firstname}</p>
          <p id="apellido">Apellido: {users[0].lastname}</p>
          <p id="address">Direccion: {users[0].address}</p>
          <p id="email">Correo: {users[0].email}</p>
        </div>
      </div>
    </div>
  ) : (
    <p>Cargando...</p>
  );
};

export default UserInfo;
