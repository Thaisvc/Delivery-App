const MIN_PASSWORD_LENGTH = 6;
const NAME_LENGTH = 12;

const validateRegister = (login, password, name) => {
  const hasValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(login);
  console.log('email', hasValidEmail);
  const hasValidPassword = password.length >= MIN_PASSWORD_LENGTH;
  console.log('pwd', hasValidPassword);
  const hasValidName = name.length >= NAME_LENGTH;
  console.log('name', hasValidName);

  return (hasValidEmail && hasValidPassword && hasValidName);
};

export default validateRegister;
