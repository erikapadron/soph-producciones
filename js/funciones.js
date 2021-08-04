
$("h1").fadeOut("slow", function(){
    $("h1").fadeIn(1000);
}); 

$("#btnCotizar").on('click', function () {
    var ingresado = $("#cotizacion").val();
    var total = ingresado * 200;
    $("#total").append(

        
        `
        <h2>Su total será $${total}</h2>
        `
    );
    console.log(total);

});


$("#btnReserva").on('click', function () {
    const fechas = [
        {
            dia : '15/08',
            horario : '12:00',
        },
        {        
            dia : '17/08',
            horario : '15:00',
        },
        {        
            dia : '17/08',
            horario : '10:00',
        },
        {        
            dia : '25/08',
            horario : '09:00',
        },
        {        
            dia : '05/09',
            horario : '12:00',
        },
        {        
            dia : '19/09',
            horario : '17:00',
        }
    
    ];
    
    
    for(let element of fechas){
        
        $("#fechas").append(
        `
        <button  type="button" class="btn btn-primary" >${element.dia} ${element.horario}</button>
        `
        );
    }

    $("#fechas").on('click', function (e){ 
        const enJSON = JSON.stringify(fechas)
        localStorage.setItem("fechas", enJSON);
        console.log(enJSON)
    });
    $("#btnReserva").off('click');
});



$("#fechas").on('click', function () {

    $("#datoReserva2").append(
        `
        <h2>Gracias por tu reserva, a la brevedad me contactaré contigo.</h2>
        `
    );
    $("#datoReserva2").fadeOut("slow", function(){
        $("#datoReserva2").fadeIn(2000);
    });
    $("#fechas").off('click');
});



$("#datoReserva2").fadeOut("slow", function(){
    $("#datoReserva2").fadeIn(1000);
});


$("#name2").change(function (e) {
    const datos = (e.target.value) ;
    const enJSON = JSON.stringify(datos)
    localStorage.setItem("datos", enJSON);
    console.log(enJSON)
});

$("#email").change(function (e) {
    const datos2 = (e.target.value) ;
    const enJSON = JSON.stringify(datos2)
    localStorage.setItem("datos2", enJSON);
    console.log(enJSON)
});

$("#phone").change(function (e) {
    const datos3 = (e.target.value) ;
    const enJSON = JSON.stringify(datos3)
    localStorage.setItem("datos3", enJSON);
    console.log(enJSON)
});

$("#message").change(function (e) {
    const datos4 = (e.target.value) ;
    const enJSON = JSON.stringify(datos4)
    localStorage.setItem("datos4", enJSON);
    console.log(enJSON)
});

