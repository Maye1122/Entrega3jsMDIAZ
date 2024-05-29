//--🛒Creando un acumulador🛒--
let agregar = document.createElement('button')
agregar.classList.add('carrito')
divBuscador.appendChild(agregar)
agregar.textContent = '🛒';
let items = [];

//------------------------------------------
document.querySelectorAll('.boton').forEach(botonTarjeta => {

	botonTarjeta.addEventListener('click', () => {
		let sumando = document.querySelectorAll('.titulo2');

		sumando.forEach((sumando) => {
			const texto = sumando.textContent;
			//const texto = sumando.textContent;

			items.push(texto)

			// if (items.includes(texto)) {
			// 	items.push(texto)
			// }
		});
		agregar.textContent = `${items.length}`

		//console.log(items)

	});

});
//------------------🎇🎇🎇🎇🎇

//--💥Creando un acumulador💥--
let lista = document.createElement('ul')
lista.classList.add('lista')
divBuscador.appendChild(lista)

agregar.addEventListener('click', () => {
	//lista.innerHTML = '';

	items.forEach(item => {
		const li = document.createElement('li')
		li.textContent = item;
		lista.appendChild(li)
	});
	lista.classList.toggle('visible')
	console.log(agregar)
});
