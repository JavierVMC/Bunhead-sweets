import LoginForm from '../../components/login_form/LoginForm';

export const Login = () => {
  return (
    <div id="login-container" className="container">
      <div>
        <h1>Inicia Sesión</h1>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};
