import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userHasLoggedIn } from '../../actions';
import { currentUserLogin } from '../../actions';
import { admin } from '../../actions';
import { useRef } from 'react';
import { postData } from '../../utils/rest_api';

const LoginForm = ({ onUserLogin, onCurrentUser, onAdmin }) => {
  const [info, setInfo] = useState(null);
  const [noUser, setNoUser] = useState(false);
  const [noPassword, setNoPassword] = useState(false);
  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();

    const formData = {
      user_email: document.querySelector('#email').value,
      password: document.querySelector('#password').value
    };

    const data = await postData(
      'http://localhost:3001/api/auth/login',
      formData
    );

    if (data) {
      if (data.message) {
        setInfo(data);
      } else {
        onUserLogin(true);
        onCurrentUser({
          first_name: data.first_name,
          last_name: data.last_name,
          phone: data.phone,
          country: data.country,
          city: data.city,
          street: data.street,
          user_email: data.user_email,
          is_admin: data.is_admin
        });
        if (data.admin === true) {
          onAdmin(true);
        }
        history.push('/');
      }
    }
  };

  const isMountedRef = useRef(true);
  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    []
  );

  useEffect(() => {
    if (info && info.message === 'Password does not match') {
      setNoPassword(true);
    } else if (info && info.message === 'No user found') {
      setNoUser(true);
    }
  }, [info]);

  return (
    <form id="loginForm" onSubmit={login} className="row">
      <div className="col-12">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Correo electrónico*"
          required
        ></input>
        {noUser ? <p className="warningForm">Usuario no encontrado</p> : ''}
      </div>
      <div className="col-12">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Contraseña*"
          required
        ></input>
        {noPassword ? <p className="warningForm">Contraseña incorrecta</p> : ''}
      </div>
      <div className="col-12">
        <button type="submit">Iniciar Sesión</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  userIsLogin: state.userIsLogin
});

const mapDispatchToProps = (dispatch) => ({
  onUserLogin: (islogin) => dispatch(userHasLoggedIn(islogin)),
  onAdmin: (isAdmin) => dispatch(admin(isAdmin)),
  onCurrentUser: (currentUser) => dispatch(currentUserLogin(currentUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
