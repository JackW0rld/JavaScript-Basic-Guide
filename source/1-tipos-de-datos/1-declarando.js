// Nota: no te preocupes por no entender todo lo que ves, solo intenta comprender lo necesario.

/*
 * Comencemos con aprender a declarar variables, te estaras preguntando, ¿Qué es una variable?
 * En palabras simples, una variable es un contendor que se almacena en memoria, este
 * contendor puede tener varios tipos de datos, como textos, numeros, valores logicos, (True o False)
 * objetos, entre otros. Hay varias formas de declarar variables en JavaScript, cada una depende el uso
 * que le querramos dar a la variable a lo largo del desarrollo, primero vamos a declarar
 * unas cuantas variables.
*/

const variable_a = "a";
const variable_2 = 2;
let verdadero = true;

/*
 * Vamos a ver la estructura de las variables declaradas para que lo comprendas mejor.
 * Como puedes observar las variables tienen 4 partes importantes, nombradas en orden son:
*/

// palabra clave / nombre / operador de asignacion / valor
const nombre_de_variable = "Hola Mundo";

/*
 * Expliquemos primero la palabra clave, como vimos en el ejemplo anterior al declarar
 * nuestras primeras variables, se puede usar tanto const como let, la diferencia radica en
 * que una es mutable y la otra es inmutable, const, es una palabra clave para indicar
 * que nuestra variable debera de permanecer constante a su valor, no podra ser cambiada mas adelante
 * en caso de que querramos cambiar el valor de una variable, let por otro lado es lo contrario, permite
 * que podamos cambiar, mutar, el valor que contenga la variable cuando lo necesitemos. * 
 * Luego de la palabra clave sigue el nombre de la variable, este puede ser cualquier nombre que
 * querramos dar, sin embargo como buenas practicas se deben seguir ciertas pautas al colocar
 * el nombre a una variable, normalmente cuando declaramos una variable no colocamos la primera
 * letra en mayusculas, es comun que estas siempre esten en minusculas. Hay dos formas comunes
 * en las que veremos variables declaradas.
*/

// metodo CamelCase:
const metodoCamelCase = "camello tierno";
// metodo snake_case
const metodo_snake_case = "serpiente tierna";

// Nota: Como puedes notar, las variables no pueden tener espacios en blanco al ser declaradas.

/*
 * Esto seria lo mas importante a tener en cuenta al momento de declarar nuestras variables
 * en JavaScript.
*/