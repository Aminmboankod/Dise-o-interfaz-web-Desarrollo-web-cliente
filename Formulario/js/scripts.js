
function createCSV() {
    const data = `
        Nombre,Primer Apellido,Segundo Apellido,Género,DNI,Código Postal,Estado Civil,Employee Number,User,Departamento,Start Date
        ${NAME},${SURNAME1},${SURNAME2},${GENDER},${DNI},${CP},${MARITALSTATUS},${EMPLOYEENUMB},${USER},${DEPARTMENT},${STARTDATE}
    `;

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "datos.csv";
    document.body.appendChild(a);

    a.click();

    window.URL.revokeObjectURL(url);
}

const LEVEL = {
	A1: 'A1',
	B1: 'B1',
	B2: 'B2',
	C1: 'C1',
	C2: 'C2',
	NATIVE: 'Native'
}

function validateForm() {
    mostrarDatos();
    return true;
}

function mostrarDatos() {
    if (validarInpt())
    {
        var NAME = document.forms["registrationForm"]["name"].value;
        var SURNAME1 = document.forms["registrationForm"]["surname1"].value;
        var SURNAME2 = document.forms["registrationForm"]["surname2"].value;
        var GENDER = document.forms["registrationForm"]["gender"].value;
        var POSTALADDRESS = document.forms["registrationForm"]["address"].value;
        var CP = document.forms["registrationForm"]["cp"].value;
        var DNI = document.forms["registrationForm"]["dni"].value;
        var EMAIL = document.forms["registrationForm"]["email"].value;
        var MOBILE = document.forms["registrationForm"]["mobile"].value;
        var BIRTHDATE = document.forms["registrationForm"]["birthdate"].value;
        var PLACEOFBIRTH = document.forms["registrationForm"]["birthplace"].value;
        var MARITALSTATUS = document.forms["registrationForm"]["maritalStatus"].value;
        var EMPLOYEENUMB = document.forms["registrationForm"]["employeeNumber"].value;
        var USER = document.forms["registrationForm"]["user"].value;
        var PASSWORD = document.forms["registrationForm"]["password"].value;
        var DEPARTMENT = document.forms["registrationForm"]["department"].value;
        var STARTDATE = document.forms["registrationForm"]["startDate"].value;
        var WORKHOURS = document.forms["registrationForm"]["workHours"].value;
        var LEVELEDUCATION = document.forms["registrationForm"]["educationLevel"].value;
        var ENGLISH = document.forms["registrationForm"]["englishLevel"].value;
        var CATALAN = document.forms["registrationForm"]["catalanLevel"].value;
        var SPANISH = document.forms["registrationForm"]["spanishLevel"].value;
        var OTHERS = document.forms["registrationForm"]["otherLanguages"].value;
        var CARD = document.forms["registrationForm"]["cardType"].value;
        var CARDNUMBER = document.forms["registrationForm"]["cardNumber"].value;
        var CVC = document.forms["registrationForm"]["cvc"].value;
        var EXPIRATIONDATE = document.forms["registrationForm"]["expirationDate"].value;
        var COLOR = document.forms["registrationForm"]["color"].value;
        var SOCIAL = document.forms["registrationForm"]["socialLinks"].value;
        var COMMENTS = document.forms["registrationForm"]["comments"].value;

        var dataString = `
            <h2>Datos del formulario:</h2>
            <p><strong>Nombre:</strong> ${NAME}</p>
            <p><strong>Primer Apellido:</strong> ${SURNAME1}</p>
            <p><strong>Segundo Apellido:</strong> ${SURNAME2}</p>
            <p><strong>Género:</strong> ${GENDER}</p>
            <p><strong>DNI:</strong> ${DNI}</p>
            <p><strong>Código Postal:</strong> ${CP}</p>
            <p><strong>Estado Civil:</strong> ${MARITALSTATUS}</p>
            <p><strong>Número de empleado:</strong> ${EMPLOYEENUMB}</p>
            <p><strong>Usuario:</strong> ${USER}</p>
            <p><strong>Departamento:</strong> ${DEPARTMENT}</p>
            <p><strong>Fecha de inicio:</strong> ${STARTDATE}</p>
            <p><strong>Dirección Postal:</strong> ${POSTALADDRESS}</p>
            <p><strong>Correo Electrónico:</strong> ${EMAIL}</p>
            <p><strong>Teléfono Móvil:</strong> ${MOBILE}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${BIRTHDATE}</p>
            <p><strong>Lugar de Nacimiento:</strong> ${PLACEOFBIRTH}</p>
            <p><strong>Contraseña:</strong> ${PASSWORD}</p>
            <p><strong>Horas de Trabajo:</strong> ${WORKHOURS}</p>
            <p><strong>Nivel de Educación:</strong> ${LEVELEDUCATION}</p>
            <p><strong>Inglés:</strong> ${ENGLISH}</p>
            <p><strong>Catalán:</strong> ${CATALAN}</p>
            <p><strong>Español:</strong> ${SPANISH}</p>
            <p><strong>Otros Idiomas:</strong> ${OTHERS}</p>
            <p><strong>Tipo de Tarjeta:</strong> ${CARD}</p>
            <p><strong>Número de Tarjeta:</strong> ${CARDNUMBER}</p>
            <p><strong>CVC:</strong> ${CVC}</p>
            <p><strong>Fecha de Expiración:</strong> ${EXPIRATIONDATE}</p>
            <p><strong>Color:</strong> ${COLOR}</p>
            <p><strong>Enlaces Sociales:</strong> ${SOCIAL}</p>
            <p><strong>Comentarios:</strong> ${COMMENTS}</p>
        `;

        // Muestra los datos en el elemento data-display
        var dataDisplay = document.querySelector('.data-display');
        dataDisplay.innerHTML = dataString;

    } else {
        alert("Por favor, rellena correctamente todos los campos.");
    }
}

/**
 * Validates all input fields in the form.
 * @returns {boolean} Returns true if all input fields are valid, false otherwise.
 */
function validarInputs() {
	var isValid = true;
    var elementos = ['name','surname1','surname2','user','department']
    for (let i = 0; i < elementos.length; i++) {
        isValid = isValid && validarTextoSimple(elementos[i]);
    }
    isValid = isValid && validarGenero();
    isValid = isValid && validarCodigoPostal();
	isValid = isValid && validarDNI();
	isValid = isValid && validarEmail();
	isValid = isValid && validarTelefono();
	
	isValid = isValid && validarEstadoCivil();
	isValid = isValid && validarSoloNumero();
	isValid = isValid && validarContraseña();
    var idiomas = ['englishLevel', 'catalanLevel', 'spanishLevel']
    for (let i = 0; i < idiomas.length; i++) {
        isValid = isValid && validarNivelIdioma(idiomas[i]);
    }
	isValid = isValid && validarMetodoPago();
	isValid = isValid && validarColorHexadecimalCorrecto();

	return isValid;
}

function validarInpt() {
    return true;
}

/**
 * Sets an error message for a given input field.
 * @param {string} message - The error message to display.
 * @param {string} input - The ID of the input field to set the error message for.
 */
function setErrorMessage(message, input) {
    const errorMessage = document.getElementById(input+"-error");
    errorMessage.innerHTML = message;
    errorMessage.style.color = 'red';
}

function conversorFecha(fecha) {
    try {
	    let parts = fecha.split("-");
	    return new Date(parts[2], parts[1] - 1, parts[0]);

    } catch (error) {
        return null;
    }
}
/**
 * Validates a simple text input field to only allow uppercase and lowercase letters and spaces.
 * @param {string} fieldName - The ID of the input field to be validated.
 * @returns {boolean} - Returns true if the input is valid, false otherwise.
 */
function validarTextoSimple(fieldName) {

	let nameInput = document.getElementById(fieldName);
	const regex = /^[a-zA-Z\s]*$/; // Expresión regular que permite letras mayúsculas, minúsculas y espacios.
	if (!regex.test(nameInput.value)) {
		setErrorMessage('El nombre solo debe contener letras mayúsculas, minúsculas o espacios.', fieldName);
        return false;
    } else {
		setErrorMessage('', fieldName);
        return true;
	} 
}
/**
 * Validates the gender input field.
 * @returns {boolean} Returns true if the gender input field contains only 'H' or 'M', false otherwise.
 */
function validarGenero() {
    let gender = document.getElementById('gender');
    const regex = /^[HM]$/; // Expresión regular que permite solo H o M.
    if (!regex.test(gender.value)) {
        setErrorMessage('El género solo debe contener H o M.', 'gender');
        return false;
    } else {
        setErrorMessage('', 'gender'); // Para borrar el mensaje de error
        return true;
    }
}
/**
 * Validates the postal code input field.
 * @returns {boolean} Returns true if the input value matches the regex pattern, false otherwise.
 */
function validarCodigoPostal() {
    const cp = document.getElementById('cp');
    const regex = /^[0-9]{5}$/; // Expresión regular que permite solo 5 dígitos.
    if (!regex.test(cp.value)) {
        setErrorMessage('El código postal solo debe contener 5 dígitos.', 'cp');
        return false;
    } else {
        setErrorMessage('', 'cp');
        return true;
    }
}
/**
 * Validates a Spanish DNI number.
 * @return {boolean} Returns true if the DNI is valid, false otherwise.
 */
function validarDNI() {
    const dni = document.getElementById('dni');
    const regex = /^[0-9]{8}[A-Z]$/; // Expresión regular que permite 8 dígitos y una letra mayúscula.
    if (!regex.test(dni.value)) {
        setErrorMessage('El DNI debe contener 8 dígitos y una letra mayúscula.', 'dni');
        return false;
    } else {
        setErrorMessage('', 'dni');
        return true;
    }
}
/**
 * Validates the email input field using a regular expression.
 * @returns {boolean} Returns true if the email is valid, false otherwise.
 */
function validarEmail() {
    const email = document.getElementById('email');
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Expresión regular que permite un email válido.
    if (!regex.test(email.value)) {
        setErrorMessage('El email debe ser válido.', 'email');
        return false;
    } else {
        setErrorMessage('', 'email');
        return true;
    }
}
/**
 * Validates the phone number input field using a regular expression that allows 9 digits.
 * @returns {boolean} Returns true if the phone number is valid, false otherwise.
 */
function validarTelefono() {
    const phone = document.getElementById('mobile');
    const regex = /^[0-9]{9}$/; // Expresión regular que permite 9 dígitos.
    if (!regex.test(phone.value)) {
        setErrorMessage('El teléfono debe contener 9 dígitos.', 'mobile');
        return false;
    } else {
        setErrorMessage('', 'mobile');
        return true;
    }
}
/**
 * Validates the birthday input field using a regular expression and checks if the date is valid and not in the future.
 * @function
 * @returns {boolean} Returns true if the birthday input field is valid, otherwise returns false.
 */
function validarFNacimiento() {
    let birthday = document.getElementById('birthdate');

    // Validar el formato "dd-MM-yyyy"
    let regex = /^(\d{2})-(\d{2})-(\d{4})$/;
    if (!regex.test(birthday.value)) {
        setErrorMessage('La fecha debe ser válida (dd-MM-yyyy).', 'birthdate');
        
        return false;
    }

    // Convertir la fecha al formato "día-mes-año"
    let dateParts = birthday.value.split("-");
    let day = dateParts[0];
    let month = dateParts[1];
    let year = dateParts[2];
    let formattedDate = `${day}-${month}-${year}`;

    let date = conversorFecha(formattedDate);
    if (date === null) {
        setErrorMessage('La fecha debe ser válida (dd-MM-yyyy).', 'birthdate');
        return false;
    }
    else {
        let today = new Date();

        if (date > today) {
            setErrorMessage('La fecha no puede ser futura.', 'birthdate');
            return false;
        } else {
        setErrorMessage('', 'birthdate');
        return true;
        }
        
    }
}
/**
 * Validates the marital status input field.
 * @returns {boolean} Returns true if the input is valid, false otherwise.
 */
function validarEstadoCivil() {
    let maritalStatus = document.getElementById('maritalStatus');
    const regex = /^[SCVD]$/; // Expresión regular que permite solo S(soltero), C(casado), V(viudo) o D(divorciado).
    if (!regex.test(maritalStatus.value)) {
        setErrorMessage('El estado civil no es correcto.', 'maritalStatus');
        return false;
    } else {
        setErrorMessage('', 'maritalStatus');
        return true;
    }
}
/**
 * Validates if the input field with id 'employeeNumber' contains only numbers.
 * @returns {boolean} Returns true if the input field contains only numbers, false otherwise.
 */
function validarSoloNumero() {
    let employeeNumber = document.getElementById('employeeNumber');
    const regex = /^[0-9]*$/; // Expresión regular que permite solo números.
    if (!regex.test(employeeNumber.value)) {
        setErrorMessage('El número de empleado solo debe contener números.', 'employeeNumber');
        return false;
    } else {
        setErrorMessage('', 'employeeNumber');
        return true;
    }
}
/**
 * Validates the start date input field.
 * @return {boolean} Returns true if the start date is valid, false otherwise.
 */
function validarFechaInicio() {
    const startDate = document.getElementById('startDate');
    
    // Validar el formato "dd-MM-yyyy"
    let regex = /^(\d{2})-(\d{2})-(\d{4})$/;
    if (!regex.test(startDate.value)) {
        setErrorMessage('La fecha debe ser válida (dd-MM-yyyy).', 'startDate');
        return false;
    }

    // Convertir la fecha al formato "día-mes-año"
    let dateParts = startDate.value.split("-");
    let day = dateParts[0];
    let month = dateParts[1];
    let year = dateParts[2];
    let formattedDate = `${day}-${month}-${year}`;

    let date = conversorFecha(formattedDate);
    if (date === null) {
        setErrorMessage('La fecha debe ser válida (dd-MM-yyyy).', 'startDate');
        return false;
    }
    else {
        let today = new Date();

        if (date > today) {
            setErrorMessage('La fecha no puede ser futura.', 'startDate');
            return false;
        } else {
        setErrorMessage('', 'startDate');
        return true;
        }
        
    }
}

/**
 * Validates the input value of an English language level.
 * @param {string} id - The id of the input element to validate.
 * @returns {boolean} - Returns true if the input value is a valid English language level, otherwise returns false.
 */
function validarNivelIdioma(id) {
    const englishLevelInput = document.getElementById(id);
    const englishLevelValue = englishLevelInput.value;

    if (Object.values(LEVEL).includes(englishLevelValue)) {
        setErrorMessage('', id);
        return true;
    } else {
        setErrorMessage('El nivel de idioma no existe.', id);
        return false;
    }
}
/**
 * Validates the payment method entered by the user.
 * @returns {boolean} Returns true if the payment method is valid, false otherwise.
 */
function validarMetodoPago() {
    const cardNumber = document.getElementById('cardNumber');
    const cvc = document.getElementById('cvc');
    const expirationDate = document.getElementById('expirationDate');

    const regexCardNumber = /^[0-9]{16}$/; // Expresión regular que permite solo 16 dígitos.
    const regexCvc = /^[0-9]{3}$/; // Expresión regular que permite solo 3 dígitos.
    const regexExpirationDate = /^[0-9]{2}\/[0-9]{2}$/; // Expresión regular que permite una fecha válida.

    if (!regexCardNumber.test(cardNumber.value) && !regexCvc.test(cvc.value) && !regexExpirationDate.test(expirationDate.value)) {
        setErrorMessage('Los datos de pago introducidos son incorrectos', 'expirationDate');
        return false;
    } else {
        setErrorMessage('', 'expirationDate');
        return true;
    }
}
/**
 * Validates if the color entered by the user is a correct hexadecimal color.
 * @returns {boolean} Returns true if the color is valid, false otherwise.
 */
function validarColorHexadecimalCorrecto() {
    const color = document.getElementById('color');
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/; // Expresión regular que permite un color hexadecimal.
    if (!regex.test(color.value)) {
        setErrorMessage('El color debe ser hexadecimal.', 'color');
        return false;
    } else {
        setErrorMessage('', 'color');
        // mensaje con el color introducido
        const colorInput = document.getElementById('colorInput');
        colorInput.style.backgroundColor = color.value;
        return true;

    }

}

/**
 * Validates a social media link.
 * @function
 * @returns {boolean} Returns true if the social media link is valid, false otherwise.
 */
function validarSocialLink() {
    const socialLinks = document.getElementById('socialLinks');
    const regex = /^(https?:\/\/)?(www\.)?([a-zA-Z]+)\.com\/.*/i;

    if (!regex.test(socialLinks.value)) {
        setErrorMessage('Introduce un enlace válido de Facebook, Instagram u otra red social.', 'socialLinks');
        return false;
    } else {
        setErrorMessage('', 'socialLinks');
        return true;
    }
}

/**
 * Función que valida la contraseña ingresada en un campo de formulario.
 * Si el campo está vacío, muestra el texto normal. Si hay contenido en el campo, muestra asteriscos.
 */
function validarContraseña() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.value === "") {
        passwordInput.type = "text"; // Muestra el texto normal si el campo está vacío
    } else {
        passwordInput.type = "password"; // Muestra asteriscos si hay contenido en el campo
    }
}
/**
 * Validates the input for work hours.
 * @returns {boolean} Returns true if the input is valid, false otherwise.
 */
function validarHorasTrabajadas() {
	const workHours = document.getElementById("workHours");
	const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
	if (!regex.test(workHours.value)) {
		setErrorMessage('El formato de hora es incorrecto (HH:mm)', 'workHours');
        return false;
	} else {
		setErrorMessage('', 'workHours');
        return true;
	}
}
