import { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import * as C from './styles';
import validateLogin from '../../utils/validateLogin';
import AuthContext from '../../context/Auth/AuthContext';

function Login() {
  const auth = useContext(AuthContext);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [canLogin, setCanLogion] = useState(true);
  const [Logged, setLogged] = useState(false);
  const [userFound, setUserFound] = useState(false);

  const navHistory = useNavigate();

  useEffect(() => {
    setCanLogion(validateLogin(login, password));
  }, [login, password]);

  const handleLogin = async () => {
    try {
      const isLogged = await auth.login(login, password);
      if (isLogged) {
        setLogged(true);
      }
    } catch (e) {
      setUserFound(true);
    }
  };

  return (
    <C.Container>
      <C.Content>
        <C.Logotipo>DeliveryApp</C.Logotipo>
        <C.LoginForm>
          <C.Label>
            <C.Title>
              login
            </C.Title>
            <C.Input
              onChange={ (e) => setLogin(e.target.value) }
              type="email"
              data-testid="common_login__input-email"
            />
          </C.Label>

          <C.Label>
            <C.Title>
              senha
            </C.Title>
            <C.Input
              onChange={ (e) => setPassword(e.target.value) }
              type="password"
              data-testid="common_login__input-password"
            />
          </C.Label>

          <C.LoginBtn
            disabled={ !canLogin }
            type="submit"
            onClick={ async (e) => {
              e.preventDefault();
              setUserFound(false);
              await handleLogin();
            } }
            data-testid="common_login__button-login"
          >
            Login
          </C.LoginBtn>
          <C.RegisterBtn
            data-testid="common_login__button-register"
            onClick={ () => navHistory('/register') }
          >
            Ainda não tenho conta
          </C.RegisterBtn>
        </C.LoginForm>

        { userFound && (
          <C.ErrorMessage
            data-testid="common_login__element-invalid-email"
          >
            Error message
          </C.ErrorMessage>
        )}

        { Logged && <Navigate to="/customer/products" /> }
      </C.Content>
    </C.Container>
  );
}

export default Login;
