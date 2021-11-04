const getEuropeanDate = (date) => {
  const newDate = new Date(date);

  const day = `0${newDate.getDay()}`.slice(-2);
  const month = `0${newDate.getMonth()}`.slice(-2);
  const year = newDate.getFullYear();

  return `${day}/${month}/${year}`;
};

export default { getEuropeanDate };
