const assert = require('chai').assert;

// Importa tus funciones aquí
const {
    validarGenero,
    validarTextoSimple,
    validarCodigoPostal,
    validarDNI,
    validarEmail,
    validarTelefono,
    validarFNacimiento,
    validarEstadoCivil,
    validarSoloNumero,
    validarFechaInicio,
    validarNivelIdioma,
    validarMetodoPago,
    validarColorHexadecimalCorrecto,
    validarSocialLink
} = require('./script.js');

describe('Validación de Datos del Formulario', function () {
    // Casos de prueba para validarGenero
    describe('validarGenero', function () {
        it('Debería devolver verdadero para género válido "H"', function () {
            assert.isTrue(validarGenero('H'));
        });

        it('Debería devolver verdadero para género válido "M"', function () {
            assert.isTrue(validarGenero('M'));
        });

        it('Debería devolver falso para género inválido "X"', function () {
            assert.isFalse(validarGenero('X'));
        });
    });

    // Agrega más casos de prueba para otras funciones de validación aquí

});
