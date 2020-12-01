export const stringToDate = (date) => {
  const [day, month, year] = date.split('.');
  const resultDate = Date.parse(`${month}/${day}/${year}`);
  const result = Number.isNaN(resultDate) ? null : new Date(resultDate);

  return result;
};

export const replaceNotDigs = (value) => value.replace(/\D/g, '');

export default {
  stringToDate,
  replaceNotDigs,
};
