let puntuacion = 0; //para el id de puntos
let pantallas = 1;  // para el id de niveles
let velocidad = 2000; //empieza con 2 segundos

$(function(){
//3ºDesactiva la clase "activo" clickando antes de que empiece la siguiente
    $(".items").hover(function(){
        let coger = $(this);
        coger.find(".hueco").click(function(){

//4ºCondición que, al desactivar la clase "activo" clickando, suma puntos
            if (coger.hasClass("activo")){
                coger.removeClass("activo");
                puntuacion ++;
                $("#puntos").html(puntuacion);


                
//5ºCambio al nivel 2 = más velocidad!
                if (puntuacion > 9){
                    pantallas = 2;
                    $("#niveles").html(pantallas);
                    clearInterval();
                    velocidad = 1666;
                    setInterval(function(){
                        azar();
                    },velocidad); 
                }

//5ºCambio al nivel 3 = más velocidad!!
                if (puntuacion > 19){
                    pantallas = 3;
                    $("#niveles").html(pantallas);
                    acelerar();
                    velocidad = 1333;
                }

//5ºCambio al nivel 4 = más velocidad!
                if (puntuacion > 29){
                    pantallas = 4;
                    $("#niveles").html(pantallas);
                    acelerar();
                    velocidad = 1000;
                }

//5ºCambio al nivel 5 = más velocidad!
                if (puntuacion > 39){
                    pantallas = 5;
                    $("#niveles").html(pantallas);
                    acelerar();
                    velocidad = 666;
                }
            }
        });
    });

//4ºFunción para limpiar la velocidad en cada nivel
function acelerar(){
    clearInterval();
    setInterval(function(){

},velocidad);  
}

//2ºActiva la función de crear número cada x tiempo
if (puntuacion < 10){
setInterval(function(){
    azar();
},velocidad);
}

//1ºEsta función crea números sin decimales hasta el 12
//1ºDespués hace que cada número corresponda a un item
//1ºActiva la clase "activo" haciendo aparecer el objero
//1ºY la deshace cuando se inicia otro número
function azar(){
    let numero = parseInt(Math.random() * 12);
    $(".items").removeClass("activo");
    $(".items:nth-child("+numero+")").addClass("activo");
}


});