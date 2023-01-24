import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/Auth/AuthContext';
import validateRegister from '../../utils/validateRegister';

function RegisterBox() {
  const auth = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [canCreate, setCanCreate] = useState(false);
  const [fail, setFail] = useState(false);
  const navHistory = useNavigate();

  useEffect(() => {
    setCanCreate(validateRegister(email, pwd, name));
  }, [email, pwd, name]);

  const handleRegister = async () => {
    try {
      setFail(false);
      const isCreated = await auth.register(name, email, pwd, 'customer');
      if (isCreated) {
        navHistory('/customer/products');
      }
    } catch (e) {
      setFail(true);
    }
  };

  return (
    <>
      <form>
        <label htmlFor="Nome">
          Nome
          <input
            type="text"
            name="Nome"
            placeholder="Seu nome"
            data-testid="common_register__input-name"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
          />
        </label>
        <label htmlFor="Email">
          Email
          <input
            type="email"
            name="Email"
            placeholder="Seu email"
            data-testid="common_register__input-email"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="Password">
          Password
          <input
            type="password"
            name="Password"
            placeholder="Sua senha"
            data-testid="common_register__input-password"
            value={ pwd }
            onChange={ ({ target: { value } }) => setPwd(value) }
          />
        </label>
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ !canCreate }
          onClick={ async (e) => {
            e.preventDefault();
            await handleRegister();
            setName('');
            setEmail('');
            setPwd('');
          } }
        >
          CADASTRAR
        </button>
      </form>
      <p
        hidden={ !fail }
        data-testid="common_register__element-invalid_register"
      >
        teste
      </p>
    </>
  );
}

export default RegisterBox;
