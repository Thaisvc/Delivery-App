const MIN_PASSWORD_LENGTH = 6;

const validateLogin = (login, password) => {
  const hasValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(login);
  const hasValidPassword = password.length >= MIN_PASSWORD_LENGTH;

  return (hasValidEmail && hasValidPassword);
};

export default validateLogin;
