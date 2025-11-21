$(function() {

    //crea la funcion que obtenga la fecha y la despliegue en el parrafo
    function mostrarFechaActualizableJquery() {
        let fecha = new Date();
        $('#fecha').text('Hola hoy es ' + fecha);
    }

    //invocamos a la función...
    mostrarFechaActualizableJquery();

    //Para que la fecha se actualice
    setInterval(mostrarFechaActualizableJquery,1000);

});

$(function() {

    $('#ampolleta').mouseover(function() {
        $(this).prop('src','assets/img/pic_bulbon.gif').prop('alt','Luz encendida');
    });

    $('#ampolleta').mouseout(function() {
        $(this).prop('src','assets/img/pic_bulboff.gif').prop('alt','Luz apagada');
    });

    $('#button01').on('click',function() {
        $('#ampolleta').prop('src','assets/img/pic_bulbon.gif').prop('alt','Luz encendida');
    });

    $('#button02').on('click',function() {
        $('#ampolleta').prop('src','assets/img/pic_bulboff.gif').prop('alt','Luz apagada');
    });

    $('#parrafo01').on({
        'mouseover':function(){
            $(this).removeClass('text-dark').addClass('text-danger');
        },
        'mouseout':function(){
            $(this).addClass('text-dark').removeClass('text-danger');
        }
    });

    $('#parrafo02').on('click',function(){
        $(this).toggleClass('bg-dark text-white');
    });

    $('#button03').on('click', function() {
        $('#parrafo03').hide(2000);
    });

    $('#button04').on('click', function() {
        $('#parrafo03').show(2000);
    });

    $('#button05').on('click', function() {
        $('#parrafo03').toggle(2000);
    });

    $('#button06').on('click', function() {
        $('#ampolletita').slideUp(2000);
    });

    $('#button07').on('click', function() {
        $('#ampolletita').slideDown(2000);
    });

    $('#button08').on('click', function() {
        $('#ampolletita').slideToggle(2000);
    });

    $('#button09').on('click', function() {
        $('#listaPaises').slideToggle(3000);
    });

    $('#button10').on('click', function() {
        $('#parrafo04').before('<p>Este es un párrafo nuevito de paquete</p>');
    });

    $('#button11').on('click', function() {
        $('#parrafo05').after('<p>Este es un párrafo nuevito de paquete</p>');
    });

    $('#button12').on('click', function() {
        $('#parrafo06').append('<p>Este es un párrafo nuevito de paquete</p>');
    });

    $('#button13').on('click', function() {
        $('#parrafo07').html('Este es un párrafo nuevito de paquete');
    });





});