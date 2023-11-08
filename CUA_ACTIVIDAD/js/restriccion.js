function validateForm() {

    const requiredFields = ["nombres", "dni", "email","fechanacimiento","codigo-postal","comentario"];
    for (const field of requiredFields) {
      const input = document.querySelector(`input[name="${field}"]`);
      if (input.value.trim() === "") {
        alert(`El campo ${field} es obligatorio.`);
        return false;
      }
    }
  
    const nameRegex = /^[a-zA-Z]+$/;
    const inputName = document.querySelector(`input[name="nombres"]`);
    if (!nameRegex.test(inputName.value.trim())){
      alert(`Por favor solo ingrese letras.`);
      return false;
    }
  
  
    const phoneRegex = /^[0-9]{8}$/;
    const inputPhone = document.querySelector(`input[name="dni"]`);
    if (!phoneRegex.test(inputPhone.value.trim())) {
      alert(`El número de dni debe tener 8 dígitos y debe ser solo número.`);
      return false;
    }

  
    // Comprobamos que el correo electrónico tiene un formato válido.
    const emailRegex = /^[a-zA-Z0-9.!#$%&'+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;    
    const inputEmail = document.querySelector(`input[name="email"]`);
    if (!emailRegex.test(inputEmail.value.trim())) {
      alert(`El correo electrónico no tiene un formato válido.`);
      return false;
    }
  
    return true;
  }
  
  document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
  
    event.preventDefault();
  
    // Validamos el formulario.
    if (!validateForm()) {
      return false;
    }
  
    document.querySelector('#formulario').submit();
  });