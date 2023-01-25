import { useState } from 'react';
// import AuthContext from '../../context/Auth/AuthContext';

function RegisterAdm() {
  // const auth = useContext(AuthContext);

  const [nameAdm, setNameAdm] = useState('');
  const [emailAdm, setEmailAdm] = useState('');
  const [pwdAdm, setPwdAdm] = useState('');
  const [type, setType] = useState('');
  // console.log(nameAdm, emailAdm, pwdAdm, type);
  return (
    <form>
      <label htmlFor="Nome">
        Nome
        <input
          type="text"
          name="nome"
          placeholder="Nome e sobrenome"
          data-testid="admin_manage__input-name"
          value={ nameAdm }
          onChange={ ({ target }) => setNameAdm(target.value) }
        />
      </label>

      <label htmlFor="Email">
        Email
        <input
          type="text"
          name="email"
          placeholder="Seu email"
          data-testid="admin_manage__input-email"
          value={ emailAdm }
          onChange={ ({ target }) => setEmailAdm(target.value) }
        />
      </label>

      <label htmlFor="Senha">
        Senha
        <input
          type="password"
          name="senha"
          placeholder="***********"
          data-testid="admin_manage__input-password"
          value={ pwdAdm }
          onChange={ ({ target }) => setPwdAdm(target.value) }
        />
      </label>

      <label htmlFor="Tipo">
        Tipo
        <select
          data-testid="admin_manage__select-role"
          onChange={ ({ target }) => setType(target.value) }
          value={ type }
        >
          <option>Vendedor</option>
          <option> </option>
        </select>
      </label>

      <button
        type="submit"
        data-testid="admin_manage__button-register"
        onClick={ (e) => {
          e.preventDefault();

          setNameAdm('');
          setEmailAdm('');
          setPwdAdm('');
        } }
      >
        CADASTRAR
      </button>
    </form>
  );
}

export default RegisterAdm;
