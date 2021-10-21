// IF ELSE
// if ( 1+1 == 4 || 2 == 1+1 ){
//     console.log('SI CUMPLE')
// }
// else{
//     console.log('NO CUMPLE')
// }
// OPERADOR TERNARIO
// ( 1+1 == 4 && 2 == 1+1 ) ? console.log('SI CUMPLE') : console.log('NO CUMPLE');
function validarIsNan(v1, v2) {
    return isNaN(v1) || isNaN(v2) ? true : false;
}

/**
 * ARROW FUNCTION = Funcion de flecha 
 const nombreDeFuncion = (parametrosOpcionales) => {
     // Do something...
 }
 */
const validateIsNaN1 = (v1, v2) => isNaN(v1) || isNaN(v2) ? true : false
const validateIsNaN2 = (v1, v2) => {
    return isNaN(v1) || isNaN(v2) ? true : false
        /**
         * ejecuta algo más aqui
         */
}

const getNewName1 = (nombre) => {
    // nombre = nombre + ' PETRONILO'
    nombre += ' PETRONILO'
    return nombre
}
const getNewName2 = (nombre) => nombre += ' PETRONILO'

let studentName1 = 'JOSE RODRIGUEZ';
let studentName2 = 'LAURA FERNANDEZ';

// console.log('RESPUESTA 1:', getNewName1(studentName1))
// console.log('RESPUESTA 1:', getNewName2(studentName2))
// console.log(1, 2, 3, 4, 'estos son numeros');



// PROGRAMACION ORIENTADA A OBJETOS
// Declarar una clase con la palabra reservada "class"

class Persona {
    nombre
    apellido
    edad

    decirNombre() {
        return this.nombre
    }
    decirApellido() {
        return this.apellido
    }
    decirNombreCompleto() {
        return `${this.decirNombre()} ${this.decirApellido()}`
            // return `${this.nombre} ${this.apellido}`
            // return this.nombre + ' ' + this.apellido
    }
    getAge() {
        return this.edad
    }
}
class ClaseEstudiante extends Persona {
    tamano = '1.60'

    getDatosPersonales() {
        return `${this.decirNombreCompleto()} ${this.getAge()}`
    }
    getSize() {
        console.log(this.tamano);
    }
}

//CREAR UNA NUEVA INSTANCIA DE LA CLASE CON "new"
//CREAR UN OBJETO DE UNA CLASE CON "new"
const objIronMan = new Persona()
objIronMan.nombre = 'Tony'
objIronMan.apellido = 'Stark'
objIronMan.edad = '52'
console.log(`${objIronMan.decirNombreCompleto()} ${objIronMan.getAge()}`)

const objCapitanAmerica = new Persona()
objCapitanAmerica.nombre = 'Steve'
objCapitanAmerica.apellido = 'Rogers'
objCapitanAmerica.edad = '77'
console.log(`${objCapitanAmerica.decirNombreCompleto()} ${objCapitanAmerica.getAge()}`)

const objClaseEstudiante = new ClaseEstudiante()
objClaseEstudiante.nombre = 'Juan'
objClaseEstudiante.apellido = 'Buitrago'
objClaseEstudiante.edad = 14
console.log(objClaseEstudiante.getDatosPersonales());
objClaseEstudiante.getSize()
objClaseEstudiante.tamano = '1.70'
console.log(objClaseEstudiante.tamano);