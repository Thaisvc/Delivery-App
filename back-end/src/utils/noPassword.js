const noPassword = (response) => response.map(({ id, name, email, role }) => ({
  id,
  name,
  email,
  role,
}));

module.exports = noPassword;
