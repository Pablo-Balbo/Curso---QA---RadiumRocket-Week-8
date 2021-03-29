// EJERCICIO 2-A

// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

// var string1 = 'This is a type string variable.';
// string1 = string1.toUpperCase();

// console.log(string1);

// ------------------------------------------------------------------------------------------------------------------------------

// EXERCISE 2-B

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
// guardando el resultado en una nueva variable (utilizar substring).

// var string1 = 'Again, this is a type string variable.';

// var first_five_characters = string1.substring(0, 5);

// console.log(first_five_characters);

// ------------------------------------------------------------------------------------------------------------------------------

// EXERCISE 2-C

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
//  guardando el resultado en una nueva variable (utilizar substring).

// var string1 = 'This is a type string variable'

// var last_three_characters = string1.substring(27, 30);

// console.log(last_three_characters);

// ------------------------------------------------------------------------------------------------------------------------------

// EXERCISE 2-D

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula
// y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

// var string = 'this is a type string variable';

// var first_letter = string.substring(0,1);
// var last_characters = string.substring(1);

// var first_letter_mayuscula = first_letter.toUpperCase();
// var last_characters = last_characters.toLowerCase();

// var result = first_letter_mayuscula + last_characters;

// console.log(result);

// ------------------------------------------------------------------------------------------------------------------------------

// EXERCISE 2-E

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

// var string = 'this is a type string variable';

// var empty_space = string.indexOf(' ',0);

// console.log(empty_space);

// ------------------------------------------------------------------------------------------------------------------------------

// EXERCISE 2-F

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga
// la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
// (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var string = 'this is the biggest television';

var first_part = string.substring(0,12);

b_of_biggest = string.substring(12,13);
var b_of_biggest = b_of_biggest.toUpperCase();

iggest = string.substring(13,19);
var iggest = iggest.toLowerCase();

t_of_television = string.substring(20,21);
var t_of_television = t_of_television.toUpperCase();

elevision= string.substring(21,30);
var elevision = elevision.toLowerCase();

var new_string = first_part + b_of_biggest + iggest + ' ' + t_of_television + elevision;

console.log(new_string);

// No supe donde usar "indexOf"

// ----------------------------------------------------------------------------------------------------------------