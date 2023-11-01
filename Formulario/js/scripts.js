function validateForm() {
	var name = document.forms["registrationForm"]["name"].value;
	var surname1 = document.forms["registrationForm"]["surname1"].value;
	var dni = document.forms["registrationForm"]["dni"].value;
	var cp = documentforms["registrationForm"]["cp"].value;
	var maritalStatus = document.forms["registrationForm"]["maritalStatus"].value;
	var employeeNumber = document.forms["registrationForm"]["employeeNumber"].value;
	var user = document.forms["registrationForm"]["user"].value;
	var department = document.forms["registrationForm"]["department"].value;
	var startDate = document.forms["registrationForm"]["startDate"].value;
  
	if (name === "" || surname1 === "" || dni === "" || cp === "" || maritalStatus === "" || employeeNumber === "" || user === "" || department === "" || startDate === "") {
	  alert("Todos los campos marcados con * son obligatorios.");
	  return false;
	} else {
		validarInputs();
		return true;
	}

	
  }

function validarInputs() {
	validarGenero();
	validarTextoSimple();
	validarCodigoPostal();
	validarDNI();
	validarEmail();
	validarTelefono();
	validarCumpleaños();
	validarEstadoCivil();
	validarSoloNumero();
	updatePasswordValue();
	validarNivelIngles();
	validarMetodoPago();
	validarColorHexadecimalCorrecto();
}


function validarGenero() {
	let gender = document.getElementById('gender');
	const regex = /^[HM]$/; // Expresión regular que permite solo H o M.
	if (!regex.test(gender.value)) {
		gender.setCustomValidity('El género solo debe contener H o M.');
	} else {
		gender.setCustomValidity('');
	}
}

function validarTextoSimple() {
	const textFields = ['name', 'surname1', 'surname2', 'birthplace', 'department'];
	for (const fieldName of textFields) {
		let nameInput = document.getElementById(fieldName);
		const regex = /^[a-zA-Z\s]*$/; // Expresión regular que permite letras mayúsculas, minúsculas y espacios.
		if (!regex.test(nameInput.value)) {
			nameInput.setCustomValidity('El nombre solo debe contener letras mayúsculas, minúsculas o espacios.');
		} else {
			nameInput.setCustomValidity('');
		}
	}
}

function validarCodigoPostal() {
	const cp = document.getElementById('cp');
	const regex = /^[0-9]{5}$/; // Expresión regular que permite solo 5 dígitos.
	if (!regex.test(cp.value)) {
		cp.setCustomValidity('El código postal solo debe contener 5 dígitos.');
	} else {
		cp.setCustomValidity('');
	}
}

function validarDNI() {
	const dni = document.getElementById('dni');
	const regex = /^[0-9]{8}[A-Z]$/; // Expresión regular que permite 8 dígitos y una letra mayúscula.
	if (!regex.test(dni.value)) {
		dni.setCustomValidity('El DNI debe contener 8 dígitos y una letra mayúscula.');
	} else {
		dni.setCustomValidity('');
	}
}

function validarEmail(){
	const email = document.getElementById('email');
	const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Expresión regular que permite un email válido.
	if (!regex.test(email.value)) {
		email.setCustomValidity('El email debe ser válido.');
	} else {
		email.setCustomValidity('');
	}
}

function validarTelefono(){
	const phone = document.getElementById('phone');
	const regex = /^[0-9]{9}$/; // Expresión regular que permite 9 dígitos.
	if (!regex.test(phone.value)) {
		phone.setCustomValidity('El teléfono debe contener 9 dígitos.');
	} else {
		phone.setCustomValidity('');
	}
}

function validarCumpleaños(){
	const birthday = document.getElementById('birthday');
	const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/; // Expresión regular que permite una fecha válida.
	if (!regex.test(birthday.value)) {

		// convertir a fecha
		let date = conversorFecha(birthday.value);
		let today = new Date();
		
		// controlar que la fecha no sea futura
		if (date > today) {
			birthday.setCustomValidity('La fecha no puede ser futura.');
		}
		else {
			birthday.setCustomValidity('La fecha debe ser válida.');
		}
	} else {
		birthday.setCustomValidity('');
	}
}

/**
 * Converts a date string in the format "YYYY-MM-DD" to a Date object.
 * @param {string} fecha - The date string to convert.
 * @returns {Date} A Date object representing the input date string.
 */
function conversorFecha(fecha) {
	let parts = fecha.split("-");
	return new Date(parts[0], parts[1] - 1, parts[2]);
}

function validarEstadoCivil() {
	let maritalStatus = document.getElementById('maritalStatus');
	const regex = /^[SCVD]$/; // Expresión regular que permite solo S(soltero), C(casado), V(viudo) o D(divorciado).
	if (!regex.test(maritalStatus.value)) {
		maritalStatus.setCustomValidity('El estado civil no es correcto.');
	} else {
		maritalStatus.setCustomValidity('');
	}
}

function validarSoloNumero() {
	let employeeNumber = document.getElementById('employeeNumber');
	const regex = /^[0-9]*$/; // Expresión regular que permite solo números.
	if (!regex.test(employeeNumber.value)) {
		employeeNumber.setCustomValidity('El número de empleado solo debe contener números.');
	} else {
		employeeNumber.setCustomValidity('');
	}
}

function validarFechaInicio() {
	const startDate = document.getElementById('startDate');
	const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/; // Expresión regular que permite una fecha válida.
	if (!regex.test(startDate.value)) {

		// convertir a fecha
		let date = conversorFecha(startDate.value);
		let today = new Date();
		
		// controlar que la fecha no sea futura
		if (date > today) {
			startDate.setCustomValidity('La fecha no puede ser futura.');
		}
		else {
			startDate.setCustomValidity('La fecha debe ser válida.');
		}
	} else {
		startDate.setCustomValidity('');
	}
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

const ENGLISH = {
	A1: 'A1',
	B1: 'B1',
	B2: 'B2',
	C1: 'C1',
	C2: 'C2',
	NATIVE: 'Native'
  };
  
function validarNivelIngles() {
	const englishLevelInput = document.getElementById('englishLevel');
	const englishLevelValue = englishLevelInput.value;

	if (Object.values(ENGLISH).includes(englishLevelValue)) {
		englishLevelInput.setCustomValidity('');
	} else {
		englishLevelInput.setCustomValidity('El nivel de inglés no es correcto.');
	}
}

function validarMetodoPago() {
	const cardNumber = document.getElementById('cardNumber');
	const cvc = document.getElementById('cvc');
	const expirationDate = document.getElementById('expirationDate');

	const regexCardNumber = /^[0-9]{16}$/; // Expresión regular que permite solo 16 dígitos.
	const regexCvc = /^[0-9]{3}$/; // Expresión regular que permite solo 3 dígitos.
	const regexExpirationDate = /^[0-9]{2}\/[0-9]{2}$/; // Expresión regular que permite una fecha válida.

	if (!regexCardNumber.test(cardNumber.value)) {
		cardNumber.setCustomValidity('El número de tarjeta debe contener 16 dígitos.');
	}

	if (!regexCvc.test(cvc.value)) {
		cvc.setCustomValidity('El CVC debe contener 3 dígitos.');
	}

	if (!regexExpirationDate.test(expirationDate.value)) {

		// convertir a fecha
		let date = conversorFecha(expirationDate.value);
		let today = new Date();

		// controlar que la fecha no sea futura
		if (date > today) {
			expirationDate.setCustomValidity('La fecha no puede ser futura.');
		}
		else {
			expirationDate.setCustomValidity('La fecha debe ser válida.');
		}
	}

}

function validarColorHexadecimalCorrecto() {
	const color = document.getElementById('color');
	const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; // Expresión regular que permite un color hexadecimal.
	if (!regex.test(color.value)) {
		color.setCustomValidity('El color debe ser hexadecimal.');
	} else {
		color.setCustomValidity('');
	}

	// mensaje con el color introducido
	const colorInput = document.getElementById('colorInput');
	colorInput.style.backgroundColor = color.value;
}