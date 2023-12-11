
var validadorTexto;
var validadorGenero;
var validadorCodigoPostal;
var validadorDNI;
var maritalStatusValidador;
var validadorEmployeeNumber;
var validadorFechaInicio;
var validadorNivelIdioma;
var validadorColorHexadecimal;
var validadorSocialLink;
var validadorHorasTrabajadas;

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
    if(validadorTexto && validadorGenero && validadorCodigoPostal && validadorDNI & maritalStatusValidador
        && validadorEmployeeNumber && validadorFechaInicio &&validadorColorHexadecimal && validadorSocialLink
        && validadorNivelIdioma && validadorHorasTrabajadas){
        return true;
    }else{
        return false;
    }
    
}




//////////////////////////////////////////////////////////
//// Funciones de validación de campos de formulario /////
//////////////////////////////////////////////////////////


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
	
    // Expresión regular que permite letras mayúsculas, minúsculas, espacios y acentos:
    const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]*$/;

	if (!regex.test(nameInput.value)) {
        validadorTexto = false;
		setErrorMessage('El nombre solo debe contener letras mayúsculas, minúsculas, espacios y acentos.', fieldName);
        return validadorTexto;
    } else if(regex.test(nameInput.value)) {
        validadorTexto = true;
		setErrorMessage('', fieldName);
        return validadorTexto;
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
        validadorGenero = false;
        return validadorGenero;
    } else {
        validadorGenero = true;
        setErrorMessage('', 'gender'); // Para borrar el mensaje de error
        return validadorGenero;
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
        validadorCodigoPostal = false;
        setErrorMessage('El código postal solo debe contener 5 dígitos.', 'cp');
        return validadorCodigoPostal;
    } else {
        validadorCodigoPostal = true;
        setErrorMessage('', 'cp');
        return validadorCodigoPostal;
    }
}

function calcularResto(numero) {
    return numero % 23;
}

function obtenerLetraDNI(resto) {
    var tablaDigitos = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]
    return tablaDigitos[resto];
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
        let numero = dni.value.substring(0,8);
        let letra = dni.value.substring(8,9);
        let resto = calcularResto(numero);
        let letraDNI = obtenerLetraDNI(resto);
        if (letraDNI != letra) {
            validadorDNI = false;
            setErrorMessage('El DNI no existe.', 'dni');
            return validadorDNI;
        }
        validadorDNI = true;
        setErrorMessage('', 'dni');
        return validadorDNI;
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
        validadorEmail = false;
        setErrorMessage('El email debe ser válido.', 'email');
        return validadorEmail;
    } else {
        validadorEmail = true;
        setErrorMessage('', 'email');
        return validadorEmail;
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
        validadorTelefono = false;
        setErrorMessage('El teléfono debe contener 9 dígitos.', 'mobile');
        return validadorTelefono;
    } else {
        validadorTelefono = true;
        setErrorMessage('', 'mobile');
        return validadorTelefono;
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
        validadorFnacimiento = false;
        setErrorMessage('La fecha debe ser válida (dd-MM-yyyy).', 'birthdate');
        
        return validadorFnacimiento;
    }

    // Convertir la fecha al formato "día-mes-año"
    let dateParts = birthday.value.split("-");
    let day = dateParts[0];
    let month = dateParts[1];
    let year = dateParts[2];
    let formattedDate = `${day}-${month}-${year}`;

    let date = conversorFecha(formattedDate);
    if (date === null) {
        validadorFnacimiento = false;
        setErrorMessage('La fecha debe ser válida (dd-MM-yyyy).', 'birthdate');
        return validadorFnacimiento;
    }
    else {
        let today = new Date();

        if (date > today) {
            validadorFnacimiento = false;
            setErrorMessage('La fecha no puede ser futura.', 'birthdate');
            return validadorFnacimiento;
        } else {
        validadorFnacimiento = true;
        setErrorMessage('', 'birthdate');
        return validadorFnacimiento;
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
        maritalStatusValidador = false;
        setErrorMessage('El estado civil no es correcto.', 'maritalStatus');
        return maritalStatusValidador;
    } else {
        maritalStatusValidador = true;
        setErrorMessage('', 'maritalStatus');
        return maritalStatusValidador;
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
        validadorEmployeeNumber = false;
        setErrorMessage('El número de empleado solo debe contener números.', 'employeeNumber');
        return validadorEmployeeNumber;
    } else {
        validadorEmployeeNumber = true;
        setErrorMessage('', 'employeeNumber');
        return validadorEmployeeNumber;
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
        validadorFechaInicio = false;
        setErrorMessage('La fecha debe ser válida (dd-MM-yyyy).', 'startDate');
        return validadorFechaInicio;
    }

    // Convertir la fecha al formato "día-mes-año"
    let dateParts = startDate.value.split("-");
    let day = dateParts[0];
    let month = dateParts[1];
    let year = dateParts[2];
    let formattedDate = `${day}-${month}-${year}`;

    let date = conversorFecha(formattedDate);
    if (date === null) {
        validadorFechaInicio = false;
        setErrorMessage('La fecha debe ser válida (dd-MM-yyyy).', 'startDate');
        return validadorFechaInicio;
    }
    else {
        let today = new Date();

        if (date > today) {
            setErrorMessage('La fecha no puede ser futura.', 'startDate');
            return false;
        } else {
            validadorFechaInicio = true;
        setErrorMessage('', 'startDate');
        return validadorFechaInicio;
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
        validadorNivelIdioma = true;
        setErrorMessage('', id);
        return validadorNivelIdioma;
    } else {
        validadorNivelIdioma = false;
        setErrorMessage('El nivel de idioma no existe.', id);
        return validadorNivelIdioma;
    }
}
/**
 * Validates the payment method entered by the user.
 * @returns {boolean} Returns true if the payment method is valid, false otherwise.
 */
function validarMetodoPago() {
    const cardType = document.getElementById('cardType');
    const cardNumber = document.getElementById('cardNumber');
    const cvc = document.getElementById('cvc');
    const expirationDate = document.getElementById('expirationDate');

    // Expresión regular que permite solo PayPal, MasterCard o Visa.
    const regexCardType = /^(PayPal|MasterCard|Visa)$/;
    const regexCardNumber = /^[0-9]{16}$/; // Expresión regular que permite solo 16 dígitos.
    const regexCvc = /^[0-9]{3}$/; // Expresión regular que permite solo 3 dígitos.
    const regexExpirationDate = /^(\d{2})-(\d{2})-(\d{4})$/; // Expresión regular que permite una fecha válida.

    if (!regexCardType.test(cardType.value) && !regexCardNumber.test(cardNumber.value) && !regexCvc.test(cvc.value) && !regexExpirationDate.test(expirationDate.value)) {
        validadorMetodoPago = false;
        setErrorMessage('Los datos de pago introducidos son incorrectos', 'expirationDate');
        return validadorMetodoPago;
    } else {
        // Validar la fecha de expiración
        let dateParts = expirationDate.value.split("-");
        let day = dateParts[0];
        let month = dateParts[1];
        let year = dateParts[2];
        let formattedDate = `${day}-${month}-${year}`;

        let date = conversorFecha(formattedDate);
        if (date === null) {
            setErrorMessage('La fecha debe ser válida (dd-MM-yyyy).', 'expirationDate');
            return false;
        } else {
            let today = new Date();

            if (date < today) {
                validadorMetodoPago = false;
                setErrorMessage('La fecha no puede ser del pasado.', 'expirationDate');
                return validadorMetodoPago;
            } else {
                validadorMetodoPago = true;
                setErrorMessage('', 'expirationDate');
                return validadorMetodoPago;
            }
            
        }

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
        validadorColorHexadecimal = false;
        setErrorMessage('El color debe ser hexadecimal.', 'color');
        return validadorColorHexadecimal;
    } else {
        validadorColorHexadecimal = true;
        setErrorMessage('', 'color');
        // mensaje con el color introducido
        const colorInput = document.getElementById('colorInput');
        colorInput.style.backgroundColor = color.value;
        return validadorColorHexadecimal;

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
        validadorSocialLink = false;
        setErrorMessage('Introduce un enlace válido de Facebook, Instagram u otra red social.', 'socialLinks');
        return validadorSocialLink;
    } else {
        validadorSocialLink = true;
        setErrorMessage('', 'socialLinks');
        return validadorSocialLink;
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
        validadorHorasTrabajadas = false;
		setErrorMessage('El formato de hora es incorrecto (HH:mm)', 'workHours');
        return validadorHorasTrabajadas;
	} else {
        validadorHorasTrabajadas = true;
		setErrorMessage('', 'workHours');
        return validadorHorasTrabajadas;
	}
}
