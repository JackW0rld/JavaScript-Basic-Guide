/*
 * JavaScript es un lenguaje de programación que admite varios tipos de datos, 
 * que son categorías que representan los diferentes tipos de valores que puedes 
 * usar en tu código. Aquí tienes una breve explicación de los tipos de datos 
 * más comunes en JavaScript:
 */

/*
 * Número (Number): Representa valores numéricos, ya sean enteros o de punto 
 * flotante (con decimales). Ejemplo: 5, 3.14.
 */
const numberOne = 1;
const numberTwo = 2;

/*
 * Cadena de texto (String): Representa secuencias de caracteres, como palabras 
 * o frases, y se pueden definir entre comillas simples (''), comillas dobles ("") o 
 * comillas invertidas (`). Ejemplo: 'Hola, mundo', "JavaScript", `Plantilla de texto`.
 */
let stringHi = "Hello!"
let stringBye = "Bye!";

/**
 * Booleano (Boolean): Representa un valor de verdadero (true) o falso (false). 
 * Se utiliza en declaraciones condicionales y operaciones lógicas. Ejemplo: 
 * true, false.
 */
let verdadero = true;
let falso = false;

/**
 * Array (Arreglo): Es una estructura de datos que almacena una colección de 
 * elementos en una secuencia ordenada, y cada elemento puede ser de cualquier 
 * tipo de dato. Se define con corchetes []. Ejemplo: 
 * [1, 2, 3], ['manzana', 'plátano', 'uva'].
 */
const numberList = [4, 3, 12];
const fruits = ['limon', 'pera', 'naranja'];

/**
 * Objeto (Object): Representa una colección de pares clave-valor, donde las 
 * claves (también llamadas propiedades) son cadenas y los valores pueden ser 
 * de cualquier tipo de dato, incluidos otros objetos. Se define con llaves {}. 
 * Ejemplo: { nombre: 'Juan', edad: 30 }.
 */
const user = {
    nombre: 'Ryan',
    password: '1234'
}
let weinner = {
    nombre: 'John',
    premio: 'Laptop Gamer Lenovo'
}

/**
 * Undefined: Representa un valor especial que se asigna automáticamente a las 
 * variables que se han declarado pero aún no se les ha asignado un valor. Ejemplo:
 *  let x; (x es undefined).
 */
let notValue;
var valueIsZero;

/**
 * Null: Representa la ausencia de valor o un valor nulo. Se utiliza cuando 
 * deseas indicar explícitamente que una variable no tiene un valor válido. 
 * Ejemplo: let y = null;.
 */
const not = null;
let dont = null;

/**
 * BigInt: Representa números enteros grandes que no se pueden representar con 
 * el tipo de dato Number. Se definen añadiendo una n al final del número. 
 * Ejemplo: 1000000000000000000000000n.
 */
const bigValue = 19999999999999999999999999n
const greatValue = 199990000000000000000000n