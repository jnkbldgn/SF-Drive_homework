export const stringToDate = (date) => {
  const [day, month, year] = date.split('.');
  const result = Date.parse(`${month}/${day}/${year}`);

  return result;
};

export const replaceNotDigs = (value) => value.replace(/\D/g, '');

export default {
  stringToDate,
  replaceNotDigs,
};
