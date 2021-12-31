import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userHasLoggedIn } from '../../actions';
import { currentUserLogin } from '../../actions';
import { admin } from '../../actions';
import { useRef } from 'react';

const LoginForm = ({ onUserLogin, onCurrentUser, onAdmin }) => {
  const [info, setInfo] = useState(null);
  const [noUser, setNoUser] = useState(false);
  const [noPassword, setNoPassword] = useState(false);
  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();

    const formData = {
      username: document.querySelector('#email').value,
      password: document.querySelector('#password').value
    };

    const response = await fetch('/users.json');

    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      if (
        data[i].email === formData.username &&
        data[i].password === formData.password
      ) {
        onUserLogin(true);

        onCurrentUser({
          firstname: data[i].firstname,
          lastname: data[i].lastname,
          address: data[i].address,
          email: data[i].email
        });
        if (data[i].admin === true) {
          onAdmin(true);
        }
        history.push('/');
      } else if (data[i].email !== formData.username) {
        setInfo({
          message: 'No user found'
        });
      } else if (data[i].password !== formData.password) {
        setInfo({
          message: 'Password does not match'
        });
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
