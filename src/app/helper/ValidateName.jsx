const validateName = (name) => {
  if (name === "") {
    return true;
  }
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(name);
};
