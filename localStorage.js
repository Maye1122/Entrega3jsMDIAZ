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


// --🍬🍬Cambiando funciones por libreria Sweet alert🍬🍬--

async function obtenerDatosLocalS() {
	let nombre = await getDataFromLocalStorage('Nombre');
	let edad = await getDataFromLocalStorage('Edad');

	if (nombre && edad) {
		Swal.fire({
			title: `Hola ${nombre}!`,
			text: `Tienes ${edad} años!`,
			icon: 'success',
			confirmButtonText: 'OK',
		});
	} else {
		await obtenerNombre()
	}
}
async function obtenerNombre() {
	let nombre = null;
	let edad = null;

	while (!nombre) {
		const resultado = await Swal.fire({
			title: "Ingresa tu nombre",
			input: "text",
			inputValidator: (value) => {
				if (!value) {
					return "Ingresa tu nombre";
				}
			}
		});
		nombre = resultado.value;

	}

	while (!edad) {
		const resultado = await Swal.fire({
			title: 'Ingresa tu edad!',
			input: 'number',
			inputValidator: (value) => {
				while (!value || isNaN(value)) {
					return 'Ingresa tu edad';
				}
			}
		});

		edad = resultado.value
	}
	Swal.fire({
		title: `Hola ${nombre}`,
		text: `Tienes ${edad} años`,
		icon: 'success',
		confirmButtonText: 'OK',
	});


	saveDataToLocalStorage('Nombre', nombre);
	saveDataToLocalStorage('Edad', edad);

}


// Llama a la función para ejecutar el código
obtenerDatosLocalS();


// -----------------------------------😋😋😋
//--🦋Boton para limpiar el LS🦋--
botonLimpiar.addEventListener('click', function () {
	//Limpiar el almacenamiento local
	Swal.fire({
		title: `Se limpió el Local Storage`,
		confirmButtonText: 'OK',
	}).then((resultado) => {
		if (resultado.isConfirmed) {

			clearLocalStorage();
			location.reload();
		}
	});

});
//--🦋Boton para Ver almacenado en el LS🦋--
botonNombre.addEventListener('click', () => {
	let nombreAlmacenado = getDataFromLocalStorage('Nombre')
	Swal.fire({
		title: `Hola ${nombreAlmacenado}!`,
		text: "Tu nombre quedó almacenado en el Local Storage",
		confirmButtonText: 'OK',


	});

});
//--🦋Boton para Ver almacenado en el LS🦋--
botonEdad.addEventListener('click', () => {
	let edadGuardada = getDataFromLocalStorage('Edad');
	Swal.fire({
		title: `Tienes ${edadGuardada} años!`,
		text: "Tu edad quedó almacenada en el Local Storage",
		confirmButtonText: 'OK',


	});
})