//Comentarios de una línea

/*Comentarios
múltiples
líneas
*/
/*
console.log("Hola mundo!!!! desde un archivo externo...!!!");
let nombre = "Christian";
console.log("Hola les saluda " + nombre);
document.getElementById('saludo').innerHTML = "Hola les saluda " + nombre;*/

function saludar(apellido) {
    console.log("Hola mundo!!!! desde un archivo externo...!!!");
    let nombre = "Christian";
    console.log("Hola les saluda " + nombre + " " + apellido);
    document.getElementById('saludo').innerHTML = `Hola me llamo ${nombre}`;
}

function mostrarFechaActualizable() {
    
    let fecha = new Date();
    document.getElementById('fecha').innerHTML = `Hola, hoy es ${fecha}`;

    setInterval(function() {
        mostrarFechaActualizable();
    },1000);
}

function encender(){
    document.getElementById('ampolleta').src='assets/img/pic_bulbon.gif';
    document.getElementById('ampolleta').alt='Ampolleta encendida';
}

function apagar() {
    document.getElementById('ampolleta').src='assets/img/pic_bulboff.gif';
    document.getElementById('ampolleta').alt='Ampolleta apagada';
}
