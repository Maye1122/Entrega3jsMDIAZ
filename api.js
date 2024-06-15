// const { response } = require("express");
//--Creando elementos--
let divApi = document.createElement('div');
let temperatura = document.createElement('p')
let estadosClima = document.createElement('p')
let ubicacion = document.createElement('p')
divApi.className = 'divApi'

//--Agregando al DOM--
creandoTitulo.insertAdjacentElement("afterend", divApi);
divApi.appendChild(temperatura)
divApi.appendChild(estadosClima)
divApi.appendChild(ubicacion)
//--Creando variables--
const kelvin = 273.15;
let lon;
let lan;
window.addEventListener('load', () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position);
			lon = position.coords.longitude
			lat = position.coords.latitude

			const apiID = 'ce64aa1faf2f95b398dfb8b3123f15e1';

			const urlBase = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiID}`

			fetch(urlBase)
				.then((response) => {

					return response.json()
				})
				.then((data) => {
					console.log(data)
					temperatura.innerHTML = '🌡' + Math.floor(data.main.temp - kelvin) + '°C';
					estadosClima.textContent = '🌥 ' + data.weather[0].main;
					ubicacion.textContent = '🗺 ' + data.name + ', 📌' + data.sys.country;

				})
		})

	}
})