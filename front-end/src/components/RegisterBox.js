import React, { useState } from 'react';

function RegisterBox() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
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
        >
          CADASTRAR
        </button>
      </form>
      <p
        hidden
        data-testid="common_register__element-invalid_register"
      >
        teste
      </p>
    </>
  );
}

export default RegisterBox;
