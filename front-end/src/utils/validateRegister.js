const MIN_PASSWORD_LENGTH = 6;
const NAME_LENGTH = 12;

const validateRegister = (login, password, name) => {
  const hasValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(login);
  const hasValidPassword = password.length >= MIN_PASSWORD_LENGTH;
  const hasValidName = name.length >= NAME_LENGTH;

  return (hasValidEmail && hasValidPassword && hasValidName);
};

export default validateRegister;
