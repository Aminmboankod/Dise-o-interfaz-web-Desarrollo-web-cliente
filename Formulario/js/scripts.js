function validateForm() {
  var name = document.forms["registrationForm"]["name"].value;
  var surname1 = document.forms["registrationForm"]["surname1"].value;
  var dni = document.forms["registrationForm"]["dni"].value;
  var cp = document.forms["registrationForm"]["cp"].value;
  var maritalStatus = document.forms["registrationForm"]["maritalStatus"].value;
  var employeeNumber = document.forms["registrationForm"]["employeeNumber"].value;
  var user = document.forms["registrationForm"]["user"].value;
  var department = document.forms["registrationForm"]["department"].value;
  var startDate = document.forms["registrationForm"]["startDate"].value;

  if (name === "" || surname1 === "" || dni === "" || cp === "" || maritalStatus === "" || employeeNumber === "" || user === "" || department === "" || startDate === "") {
      alert("Todos los campos marcados con * son obligatorios.");
      return false;
  }

  // Puedes agregar más validaciones específicas para cada campo según tus requisitos.

  return true;
}

function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");

  if (passwordField.type === "text") {
      passwordField.type = "password";
  }
}

function updatePasswordValue() {
  var passwordInput = document.getElementById("password");
  var hiddenPassword = passwordInput.value.replace(/./g, '*'); // Reemplaza cada carácter por un asterisco
  passwordInput.value = hiddenPassword;
}
