const validation = (userData) => {
  const errors = {};
  if (
    !/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(
      userData.username
    )
  ) {
    errors.username = "El correo ingresado no es válido";
  }
  if (!userData.username) {
    errors.username = "Correo electrónico no puede estar vacio";
  }

  return errors;
};

export default validation;
