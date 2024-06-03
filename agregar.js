//--🛒Creando un acumulador🛒--
let agregar = document.createElement('button')
agregar.classList.add('carrito')
divBuscador.appendChild(agregar)
agregar.textContent = '🛒';
let botonAgregar = document.querySelectorAll('[id ^= "agregar-"]');
let sumandoElementos = [];
let carritoInfo = document.createElement('div');
carritoInfo.id = 'carrito-info';
//let carritoInfo = document.getElementById('carrito-info');

botonAgregar.forEach((boton, index) => {
	boton.dataset.nombre = agrupandoDefinicion[index].nombre;
});

botonAgregar.forEach(boton => {
	boton.addEventListener('click', () => {

		let nuevoTitulo = boton.dataset.nombre;
		nuevoTitulo.textContent = boton.dataset.nombre;
		alert('ingresaste: \n' + nuevoTitulo);
		sumandoElementos.push(nuevoTitulo);
		//carritoInfo.textContent = sumandoElementos.join(', ')
		carritoInfo.innerHTML = `Elementos agregados:<br>  ${sumandoElementos.join('<br>')}`


	})
})
agregar.addEventListener('click', () => {
	if (sumandoElementos.length > 0) {
		carritoInfo.style.display = 'block';


	} else {
		alert('No se han agregado elementos al carrito aún.');
	}
})
document.body.appendChild(carritoInfo);
// Obtener referencia al botón de cierre
let cerrarAlert = document.querySelector('.cerrar');

// Agregar evento clic al botón de cierre
carritoInfo.addEventListener('click', () => {
	carritoInfo.style.display = 'none';
});
