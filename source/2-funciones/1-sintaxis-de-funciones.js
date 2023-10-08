/*
 * Preparate para ver aprender sobre las funciones, aqui veras una explicacion
 * sobre la sintaxis de una funcion en JavaScript.
*/

function nombreDeLaFuncion(parametro1, parametro2) {
    // Código que realiza una tarea o calcula un resultado
    // Puede utilizar los parámetros y puede devolver un valor usando la declaración 'return'
}

/*
 * function: La palabra clave function se utiliza para declarar una función en 
 * JavaScript. * 
 * 
 * nombreDeLaFuncion: Debes asignar un nombre descriptivo a tu función. El nombre 
 * de la función sigue las mismas reglas de nomenclatura que las variables y se 
 * utiliza para llamar a la función más adelante en el código. * 
 * 
 * parametro1, parametro2: Los parámetros son valores que se pasan a la función 
 * cuando se llama. Estos son opcionales y puedes tener cero o más parámetros. Los 
 * parámetros actúan como variables locales dentro de la función y se utilizan para 
 * recibir datos que la función va a procesar. * 
 * 
 * {}: Las llaves {} delimitan el cuerpo de la función, donde se coloca el código 
 * que se ejecutará cuando la función sea llamada.
 * 
 * return: Opcionalmente, puedes usar la palabra clave return dentro de la función 
 * para especificar el valor que la función debe devolver cuando termine su ejecución. 
 * Si no se utiliza return, la función devolverá undefined por defecto.
*/

// Ejemplo de una funcion en javaScript.
function suma(a, b) {
    let resultado = a + b;
    return resultado;
  }
  
  // Llamando a la función y almacenando el resultado en una variable
  let resultadoSuma = suma(3, 5);
  
  console.log(resultadoSuma); // Imprimirá 8

// Para correr la funcion de ejemplo, usa tu terminal y navega hasta la carpeta 'funciones'
// Estando en la carpeta correcta del ejercicio, ejecuta el comando: node 1-sintaxis-de-funciones.js

/*
 * Lo que hicimos en el ejemplo anterior fue: Declaramos una función llamada suma que toma dos parámetros, a y b.
 * Dentro de la función, realizamos una operación de suma con los parámetros y almacenamos 
 * el resultado en la variable resultado.
 * Utilizamos la declaración return para devolver el valor de resultado cuando la función se llama.
 * Luego, llamamos a la función suma con los valores 3 y 5 como argumentos y almacenamos el 
 * resultado en la variable resultadoSuma.
 * Finalmente, imprimimos el valor de resultadoSuma, que es 8, en la consola.
*/