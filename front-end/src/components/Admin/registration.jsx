import { useContext, useEffect, useState } from 'react';
import validateRegister from '../../utils/validateRegister';
import AuthContext from '../../context/Auth/AuthContext';

function RegisterAdm() {
  const auth = useContext(AuthContext);

  const [nameAdm, setNameAdm] = useState('');
  const [emailAdm, setEmailAdm] = useState('');
  const [pwdAdm, setPwdAdm] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState(false);
  const [canCreate, setCanCreate] = useState(false);

  useEffect(() => {
    setCanCreate(validateRegister(emailAdm, pwdAdm, nameAdm));
  }, [emailAdm, pwdAdm, nameAdm]);

  const handleRegisterAdm = async () => {
    try {
      setError(false);
      const isCreated = await auth.register(nameAdm, emailAdm, pwdAdm, '');
      if (isCreated) {
        console.log(isCreated);
      }
    } catch (e) {
      setError(true);
    }
  };

  return (
    <>
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
          disabled={ !canCreate }
          onClick={ async (e) => {
            e.preventDefault();
            await handleRegisterAdm();
            setNameAdm('');
            setEmailAdm('');
            setPwdAdm('');
          } }
        >
          CADASTRAR
        </button>
      </form>
      <p
        hidden={ !error }
        data-testid="admin_manage__element-invalid-register"
      >
        DADOS INVÁLIDOS
      </p>
      {' '}

    </>
  );
}

export default RegisterAdm;
