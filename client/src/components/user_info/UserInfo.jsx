import { connect } from 'react-redux';
import './userInfo.css';

const UserInfo = ({ currentUser }) => {
  return (
    <div id="componentePerfil">
      <div className="flex-container row">
        <div className="col-12 col-md-3" id="imagenPerfil">
          <img src={currentUser.image} alt="foto de perfil"></img>
        </div>

        <div id="datosPerfil" className="col-12 col-md-9">
          <h3>Información Personal</h3>
          <p id="nombre">
            <span>Nombre:</span> {currentUser.first_name}
          </p>
          <p id="apellido">
            <span>Apellido:</span> {currentUser.last_name}
          </p>
          <p id="address">
            <span>Pais:</span> {currentUser.country}
          </p>
          <p id="address">
            <span>Ciudad:</span> {currentUser.city}
          </p>
          <p id="address">
            <span>Direccion:</span> {currentUser.street}
          </p>
          <p id="email">
            <span>Correo:</span> {currentUser.user_email}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.userR.currentUser
});

export default connect(mapStateToProps)(UserInfo);
