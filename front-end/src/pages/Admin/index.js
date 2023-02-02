import { useState, useEffect } from 'react';
import * as C from './styles';
import RegisterAdmin from '../../components/Admin/registration';
import Navbar from '../../components/Navbar/NavBar';
import TableNoContext from '../../components/TableDefault/TableNoContext';
import useApi from '../../hooks/useApi';

function Registration() {
  const [users, setUsers] = useState([]);

  const api = useApi();

  useEffect(() => {
    (async () => {
      setUsers(await api.getUsers());
    })();
  }, [api, users]);

  return (
    <>
      <Navbar />
      <C.Box>
        <C.Title>Cadastrar novo usuário</C.Title>
        <RegisterAdmin />
      </C.Box>
      <C.Box>
        <C.Title>Lista de usuários</C.Title>
        <TableNoContext type="users" listItems={ users } />
      </C.Box>
    </>
  );
}

export default Registration;
