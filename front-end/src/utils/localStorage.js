export function saveByKey(key, user) {
  localStorage.setItem(key, JSON.stringify(user));
}

export function getByKey(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function logout() {
  localStorage.removeItem('user');
}
