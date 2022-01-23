import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useRef, useEffect } from 'react';
import { userHasLoggedIn } from '../../redux/actions/actions';
import { currentUserLogin } from '../../redux/actions/actions';

import './navBar.css';

const NavBar = ({ userIsLogin, onUserLogin, currentUser, onCurrentUser }) => {
  const isMountedRef = useRef(true);
  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    []
  );

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {' '}
            <span className="sr-only">Toggle navigation</span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          <Link className="navbar-brand" to="/">
            Bunheads' Sweets
          </Link>{' '}
        </div>

        <div
          className="navbar-collapse collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/tienda">Tienda</Link>
            </li>
            <li>
              <Link to="/noticias">Noticias</Link>
            </li>
            <li>
              <Link to="/equipo">Equipo</Link>
            </li>
            <li>
              <Link to="/contactanos">Contáctanos</Link>
            </li>
            {userIsLogin ? (
              <>
                {currentUser.is_admin ? (
                  <li>
                    <Link to="/panel-de-control">Panel de control</Link>
                  </li>
                ) : (
                  ''
                )}
                <li>
                  <Link to="/usuario">Perfil</Link>
                </li>
                <li>
                  <Link to="/carrito">Carrito</Link>
                </li>{' '}
                <li className="sinEfecto">
                  <Link to="/">
                    <button
                      id="loginButton"
                      onClick={() => {
                        onUserLogin(false);
                        onCurrentUser({
                          user_email: 'Cargando...',
                          first_name: 'Cargando...',
                          last_name: 'Cargando...',
                          country: 'Cargando...',
                          city: 'Cargando...',
                          street: 'Cargando...',
                          phone: 'Cargando...',
                          image: 'image_1642567028612.jpg',
                          is_admin: false
                        });
                      }}
                    >
                      Cerrar Sesión
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                {' '}
                <li className="sinEfecto">
                  <Link to="/login">
                    <button id="loginButton">Iniciar Sesión</button>
                  </Link>
                </li>
                <li className="sinEfecto">
                  <Link to="/registro">
                    <button id="signupButton" className="btn btn-primary">
                      Registrarse
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  userIsLogin: state.authR.userIsLogin,
  currentUser: state.userR.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  onUserLogin: (islogin) => dispatch(userHasLoggedIn(islogin)),
  onCurrentUser: (currentUser) => dispatch(currentUserLogin(currentUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
