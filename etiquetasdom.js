//---Recorriendo el array---
let contador = 1;
agrupandoDefinicion.forEach(element => {
	//--💳creé la tarjeta💳--
	let tarjetaInfo = document.createElement('div')
	let tarjeTitle = document.createElement('h2')
	let tarjeDescrip = document.createElement('p');
	let tarjeBoton = document.createElement('button')

	//--💦Class💫--
	tarjetaInfo.classList.add('infoContenedor')
	tarjeTitle.classList.add('titulo2');
	tarjeDescrip.classList.add('parrafo');
	tarjeBoton.classList.add('boton');
	tarjeBoton.id = 'agregar-' + contador;
	contador++

	//--🧨usando append para ver en HMTL🧨--
	document.body.append(tarjetaInfo);
	tarjetaInfo.append(tarjeTitle);
	tarjetaInfo.append(tarjeDescrip);
	tarjetaInfo.append(tarjeBoton);
	//--🗒 Añadiendo la descripcion de cada elemento🗒--
	tarjeTitle.textContent = `${element.id} ${element.nombre}`;
	tarjeDescrip.textContent = `${element.definicion}`
	tarjeBoton.textContent = 'Agregar';

	//---Añadir un atributo data para buscar por nombre---
	tarjetaInfo.dataset.nombre = element.nombre.toLowerCase();
	tarjetaInfo.dataset.id = parseInt(element.id);

});
//--🎆creando eventListener🎆--
botonInput.addEventListener('click', () => {
	//---Creando variables para guardar la info creada y compararla---
	let ingresoValor = esunInput.value.toLowerCase()
	let tarjeta = document.querySelectorAll('.infoContenedor');
	let coincidencia = false
	//---si hay un resultado lo muestra en pantalla---
	tarjeta.forEach(tarjet => {
		if (tarjet.dataset.nombre.includes(ingresoValor) || tarjet.dataset.id.includes(ingresoValor)) {
			tarjet.style.display = 'block';
			coincidencia = true;
		} else {
			//coincidencia
			tarjet.style.display = 'none';
		}
	});
	if (!coincidencia) {
		alert('No hay resultados que coinciden con tu busqueda!')
		tarjeta.forEach(tarjet => {
			tarjet.style.display = 'block'
		});

	}
});
//---Si es con enter---
esunInput.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		botonInput.click();
	}
});
