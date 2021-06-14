console.log("¡Hola!");
var estilodefotos=prompt("Ingrese el estilo de fotos que desea realizar");
var cantidad= parseInt(prompt('¿Cantidad de fotos deseadas?'));
const iva= 1.21;


if((cantidad == "") || (estilodefotos == "")) {
    alert("¡Le falta ingresar algún dato, por favor, vuelva a intentar!");
}

sesion= 'Estilo tipo' + ' ' + estilodefotos + ' ' +'con' + ' '+  cantidad + ' ' + 'fotos editadas'

function precio (cantidad, iva) {
    return cantidad * iva * 250;
}

var preciofinal = precio(cantidad, iva);
console.log(preciofinal);

alert( sesion + ' ' + 'y su precio final es de: $' + preciofinal);

const arrayFechas= ["01/07", "03/07", "02/07", "15/07", "20/07"];
arrayFechas.sort();
const arrayHorarios= ["10hs", "08hs", "15hs", "18hs", "20hs"]
arrayHorarios.sort();
const mostrar= arrayFechas.map(x => x + ' ' + arrayHorarios)


function reserva(nombre, fecha, horario, horasDeSesion) {
    var nombre= prompt("Ingrese el nombre de quien reserva");
    alert(mostrar)
    var fecha = prompt("Ingrese la fecha que desea reservar");
    var horario = prompt("Ingrese el horario en el que quieres realizar la sesión");
    var horasDeSesion = prompt("Ingresa horas estimadas de sesión");
    this.nombre = nombre;
    this.fecha = fecha;
    this.horario = horario;
    this.horasdesesion = horasDeSesion;
    this.estado = "reservada";
}

const reserva1 = new reserva();
const reserva2 = new reserva();
const reserva3 = new reserva();


console.log(reserva1);
console.log(reserva2);
console.log(reserva3);







