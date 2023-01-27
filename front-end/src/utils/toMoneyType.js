const toMoneyType = (value) => {
  if (typeof value === 'number') {
    return value.toFixed(2).replace('.', ',');
  }
  return Number(value).toFixed(2).replace('.', ',');
};

export default toMoneyType;
