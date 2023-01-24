export function saveUser(user) {
  // salva dadosno localStorage na chave
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
  // pega dados do usuário no item 'user' do localStorage
  return JSON.parse(localStorage.getItem('user'));
}
export function logout() {
  // apaga dados do localStorage
  localStorage.removeItem('user');
}
