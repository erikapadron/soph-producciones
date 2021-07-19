console.log("¡Hola!")

const URLGET = "https://jsonplaceholder.typicode.com/posts"

$("h1").fadeOut("slow", function(){
    $("h1").fadeIn(1000);
}); 


$("#btnCotizar").on('click', function () {
    $("#datoReserva").append(
        
        `
        <div class="row g-2">
            <div class="col-md">
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInputGrid" placeholder="¿15?¿20?¿x?" value="Cantidad de fotos">
                    <label for="floatingInputGrid">Cantidad de fotos</label>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option selected>Seleccioná</option>
                            <option value="1">Exterior</option>
                            <option value="2">En estudio</option>
                            <option value="3">Locacion</option>
                        </select>
                        <label for="floatingSelectGrid">Elige tipo de fotos</label>
                    </div>
                </div>
            </div>
        </div>
        `
        );

});


$("#btnReserva").on('click', function () {
    const fechas = [
        {
            dia : '15/07',
            horario : '12:00',
        },
        {        
            dia : '17/07',
            horario : '15:00',
        },
        {        
            dia : '17/07',
            horario : '10:00',
        },
        {        
            dia : '25/07',
            horario : '09:00',
        },
        {        
            dia : '05/08',
            horario : '12:00',
        },
        {        
            dia : '19/08',
            horario : '17:00',
        }
    
    ];
    
    
    for(let element of fechas){
        
        $("#fechas").append(
        `
        <button class="btn btn-primary text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal">${element.dia} ${element.horario}</button>
        `
        );
    }

});

$("#fechas").on('click', function () {
    $("#datoReserva2").append(
        `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Datos de reserva</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Nombre:</label>
                                <input type="name" class="form-control" id="recipient-name" required="required">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Mail:</label>
                                <input type="email" class="form-control" required="required">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Número:</label>
                                <input type="tel" class="form-control" required="required">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-primary" type="submit" id="enviarReserva">
                                Concretar reserva
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `
    );
});
