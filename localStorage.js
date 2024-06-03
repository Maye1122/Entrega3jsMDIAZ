//--Creando botones para LS--
let infoLocalStorage = document.createElement('footer');
let botonNombre = document.createElement('button');
let botonEdad = document.createElement('button');
let botonLimpiar = document.createElement('button');
//--💦Class💫--
infoLocalStorage.classList.add('localstorage')
botonEdad.className = 'botonEdad'
botonNombre.className = 'botonNombre'
botonLimpiar.className = 'botonLimpiar'
//--🧨usando append para ver en HMTL🧨--
document.body.append(infoLocalStorage)
infoLocalStorage.append(botonNombre, botonEdad, botonLimpiar);
//--🗒 Añadiendo la descripcion de cada elemento🗒--
botonEdad.innerHTML = 'Tu Edad'
botonNombre.innerHTML = 'Tu nombre'
botonLimpiar.innerHTML = 'limpiarLS'

//--🍄SetItem-GetItem-Clear🍄-- 
function saveDataToLocalStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

function getDataFromLocalStorage(key) {
	let data = localStorage.getItem(key);
	return JSON.parse(data);
}

function clearLocalStorage() {
	localStorage.clear();
}

//--Almacenando los datos del local--
let nombre = getDataFromLocalStorage('Nombre');
let edad = getDataFromLocalStorage('Edad');

if (!nombre || !edad) {
	if (!nombre) {
		nombre = prompt('Hola, Ingresa tu nombre');
		while (nombre === null || nombre.trim() === '') {

			nombre = prompt('Ingresa tu Nombre');

		}
		saveDataToLocalStorage('Nombre', nombre);
	}
	if (!edad) {
		edad = parseInt(prompt('Ingresa tu edad'))
		while (isNaN(edad)) {

			edad = parseInt(prompt('Ingresa tu edad'));

		}
		saveDataToLocalStorage('Edad', edad);
	}

} else {
	alert(`Hola ${nombre}!, tienes ${edad} años.`);
}
//--🦋Boton para limpiar el LS🦋--
botonLimpiar.addEventListener('click', function () {
	//Limpiar el almacenamiento local
	clearLocalStorage();
	alert('Se limpió el Local Storage');
	location.reload();
});

botonNombre.addEventListener('click', () => {
	let nombreAlmacenado = getDataFromLocalStorage('Nombre')
	alert(`Hola ${nombreAlmacenado}, \n tu nombre quedo almacenado en el Local Storage`)
});
botonEdad.addEventListener('click', () => {
	let edadGuardada = getDataFromLocalStorage('Edad');
	alert(`Tienes ${edadGuardada} años \n esta almacenado en el Local Storage`)
})