let nombre;
let apellido;
let mail;
let cantidad;
let categoria;
let precio = 0;


const botonResumen = document.querySelector("#botonResumen");
botonResumen.addEventListener("click", function() {
	/*event.preventdefault();
	window.history.back();*/
	if (validarCantidad(getCantidad()) && validarTexto(getNombre()) && validarTexto(getApellido()) && validarMail(getMail())) {
		calcularPrecio();
	} else {
		document.querySelector("#precio").textContent = "Total a pagar: $ ";
	}
});

const botonBorrar = document.querySelector("#botonBorrar");
botonBorrar.addEventListener("click", function() {
	document.getElementById("inputFormCompraNombre").value = "";
	document.getElementById("inputFormCompraApellido").value = "";
	document.getElementById("inputFormCompraMail").value = "";
	document.getElementById("inputFormCompraCantidad").value = "";
	document.querySelector("#precio").textContent = "Total a pagar: $ ";
});

function validarTexto(texto) {
	const nombreOapellido = /^(?=.{4,20}$)[a-zA-ZÀ-ÿ\u00f1\u00d1]+([a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.exec(texto);
	const comprobarTexto = !!nombreOapellido;
	console.log("texto = " + comprobarTexto);
	return comprobarTexto
}

function validarMail(correo) {
	const email = /^[a-zA-Z0-9.!Ññ#$%&'*+\=?^_`{|}~-]+@([\w-]+\.)+[\w-]{2,4}$/.exec(correo);
	const comprobarMail = !!email;
	console.log("Mail = " + comprobarMail);
	return comprobarMail;
}

function validarCantidad(cantidadSeleccionada) {
	const cantidadAcomprobar = /^[0-9]{1,3}$/.exec(cantidadSeleccionada);
	const comprobarCantidad = !!cantidadAcomprobar;
	return comprobarCantidad;
}

function getNombre() {
	return nombre = document.getElementById("inputFormCompraNombre").value;
}

function getApellido() {
	return apellido = document.getElementById("inputFormCompraApellido").value;
}

function getMail() {
	return mail = document.getElementById("inputFormCompraMail").value;
}

function getCantidad() {
	return cantidad = parseInt(document.getElementById("inputFormCompraCantidad").value, 10);
}

function calcularPrecio() {
	const categoriaSeleccionada = document.getElementById("inputFormCompraCategoria").value;
	let descuento;
	if (categoriaSeleccionada === "Estudiante") {
		descuento = 80;
	} else if (categoriaSeleccionada === "Trainee") {
		descuento = 50;
	} else if (categoriaSeleccionada === "Junior") {
		descuento = 15;
	}
	let montoDescuento = (100 - descuento) / 100;
	precio = (cantidad * 200) * montoDescuento;
	document.querySelector("#precio").textContent = "Total a pagar: $ " + precio;
}