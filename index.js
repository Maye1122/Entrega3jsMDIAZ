let acumulandoConocmiento = [];
let seguir = true

// --👷‍♀️Funcion constructora👷‍♀️--
const DiccionarioJs = function (id, nombre, definicion) {
	this.id = id;
	this.nombre = nombre;
	this.definicion = definicion

}
//---Creando objetos instanciando clases---
let Definicion1 = new DiccionarioJs(1, 'Splice()', 'Elimina uno o varios elementos de un array en cualquier posicion ej: \n let nombre = ["Ana", "Maria", "Sandra"] \n nombre.splice(1,2) \n 1 es la posición en la que se ubica el array \n 2 es la cantidad de elementos a eliminar \n Eliminados: Maria, Sandra');
let Definicion2 = new DiccionarioJs(2, 'Includes()', 'Me permite saber si un elemento que recibo por parámetro existe o no dentro de un array retornando false o true ej: \n let nombre = ["Ana", "Maria", "Sandra"] \n nombre.includes(Miguel) \n R/: false');
let Definicion3 = new DiccionarioJs(3, 'Unshift()', 'Agrega uno o más elementos al inicio de un array ej: \n let nombre = ["Ana", "Maria"] \n nombre.unshift("Miguel") \n R/: ["Miguel","Ana", "Maria"]');
let Definicion4 = new DiccionarioJs(4, 'Reverse()', 'Invierte el orden de los elementos en un array ej: \n let nombre = ["Ana", "Maria"] \n nombre.reverse() \n R/: ["Maria","Ana"]');
let Definicion5 = new DiccionarioJs(5, 'Join()', 'Se utiliza para unir todos los elementos de un array ej: \n let nombre = ["Ana", "Maria"] \n nombre.join("+") \n R/: Ana+Maria');
let Definicion6 = new DiccionarioJs(6, 'Concat()', 'Une dos o más arrays,devolviendo un nuevo array sin modificar el existente ej: \n let nombre = ["Ana", "Maria"] \n nombre.concat("Miguel") \n R/: ["Ana", "Maria", "Miguel"] ');
let Definicion7 = new DiccionarioJs(7, 'Slice()', 'Extrae una parte del array, pasando en el argumento las posiciones de inicio y final ej: \n let array = [1, 2, 3, 4, 5]; \n array.slice(2,3) \n R/:[3]');
let Definicion8 = new DiccionarioJs(8, 'Push()', 'Añade elementos al final del Array, modificando el original ej: \n  let nombre = ["Ana", "Maria"] \n nombre.push("Juan")  \n R/: ["Ana", "Maria", "Juan"]');
let Definicion9 = new DiccionarioJs(9, 'pop()', 'Elimina el último elemento de un array, modificando el original ej: \n  let nombre = ["Ana", "Maria"]\n nombre.pop() \n R/: ["Ana"]');
let Definicion10 = new DiccionarioJs(10, 'IndexOf()', 'encuentra el primer elemento de un Array, sino encuentra el elemento el resultado es -1  \n recibe  como argumentos un elemento y un inicio ej:\n let array = [1, 2, 3, 4, 5];  \n array.indexOf(1,2) \n R/:-1 ');

//--🧶Mi Array 🧶--
let agrupandoDefinicion = [Definicion1, Definicion2, Definicion3, Definicion4, Definicion5, Definicion6, Definicion7, Definicion8, Definicion9, Definicion10];

//--✨Creando elementos HTML✨--
let creandoTitulo = document.createElement('h1')
creandoTitulo.classList.add('titulo1')
document.body.appendChild(creandoTitulo)
creandoTitulo.textContent = 'Adquiriendo Conocimientos'

//--🔎Creando un buscador🔎--
let divBuscador = document.createElement('div')
let esunInput = document.createElement('input')
let botonInput = document.createElement('button')
//Adicionales del INPUT
esunInput.type = 'text'
esunInput.placeholder = 'Ingresa tu busqueda aqui'
//--💦Class💫--
esunInput.classList.add('esunInput')
divBuscador.classList.add('divBuscador');
botonInput.classList.add('botonInput');
//--🧨usando append para ver en HMTL🧨--
document.body.appendChild(divBuscador);
divBuscador.appendChild(esunInput)
divBuscador.appendChild(botonInput)
//--🗒 Añadiendo la descripcion de cada elemento🗒--
botonInput.textContent = 'Buscar';