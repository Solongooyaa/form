export const Validate = (form) => {
  let isValide = true;
  let newError = {
    firstName: " ",
    lastName: " ",
    userName: " ",
    email: " ",
    phoneNumber: " ",
    password: " ",
    confirmPassword: " ",
    dateOfBirth: " ",
    image: " ",
  };
  if (form.firstName === "") {
    isValide = false;
    newError.firstName = "error";
  }
  if (form.lastName === "") {
    isValide = false;
    newError.lastName = "error";
  }
  if (form.userName === "") {
    isValide = false;
    newError.userName = "error";
  }
  if (form.email === "") {
    isValide = false;
    newError.email = "error";
  }
  if (form.phoneNumber === "") {
    isValide = false;
    newError.phoneNumber = "error";
  }
  if (form.password === "") {
    isValide = false;
    newError.password = "error";
  }
  if (from.password.length < 8) {
    isValide = false;
    newError.password = "error";
  }
  if (form.confirmPassword === "") {
    isValide = false;
    newError.confirmPassword = "error";
  }
  if (form.password !== from.confirmPassword) {
    isValide = false;
    newError.password = "error";
  }
  if (form.dateOfBirth === "") {
    isValide = false;
    newError.dateOfBirth = "error";
  }
  if (form.image === "") {
    isValide = false;
    newError.image = "error";
  }

  return { isValide, newError };
};
