const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default { set };
