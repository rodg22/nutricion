let numSlide = 1;
let numPilar = 1;
let numTaller = 1;

$(document).ready(function() {
    // --------------------- MENU HAMBURGUESA ----------------------
    $('#hamburger').click(function () {
        $('.hamburger').toggleClass('open');
        $(".menu").fadeToggle(300);
    });

    // ------------ SELECCION Y SUBRAYADO SEGUN HTML ACTUAL -------------
    let url = window.location.href;
    $(".menu a").each(function() {
        if (url == (this.href)) {
            $(this).css({"border-bottom":"1px solid var(--MarronTitulosyTexto)"});
        }
        else {
            $(this).css({"border-bottom":"none"});
        }
    });

    // ------------ FLECHAS IZQUIERDA Y DERECHA SLIDES TEXTO ------------
    $("#flecha-izquierda").css({"display":"none"});
    $(`#flecha-izquierda`).click(function() {
        if(numSlide <= 1) {
            numSlide = 1;
            $("#flecha-izquierda").css({"display":"none"});
        } else {
            numSlide--;
            $("#flecha-derecha").css({"display":"block"});
            $("#flecha-izquierda").css({"display":"block"});
            $(".div-parrafos p").css({"display":"none"});
            $(`#parrafo-${numSlide}`).fadeIn(1000);
        }
    });

    $(`#flecha-derecha`).click(function() {
        if(numSlide >= 3) {
            numSlide = 3;
            $("#flecha-derecha").css({"display":"none"});
        } else{
            numSlide++;
            $("#flecha-izquierda").css({"display":"block"});
            $(".div-parrafos p").css({"display":"none"});
            $(`#parrafo-${numSlide}`).fadeIn(1000);
        }
    });
    
    // ------------ FLECHAS IZQUIERDA Y DERECHA BLANCAS-SLIDES 5 PILARES ------------
    $(`#flecha-izquierda-blanca`).click(function() {
        if(numPilar <= 1) {
            numPilar = 1;
        } else {
            numPilar--;
            $(".sliders div").css({"display":"none"});
            $(`#slide-${numPilar}`).fadeIn(1000);
        }
    });

    $(`#flecha-derecha-blanca`).click(function() {
        if(numPilar >= 5) {
            numPilar = 5;
        } else{
            numPilar++;
            $(".sliders div").css({"display":"none"});
            $(`#slide-${numPilar}`).fadeIn(1000);
        }
    });
    
    // ------------ FLECHAS IZQUIERDA Y DERECHA TALLERES: 5 CURSOS ------------
    $(`#flecha-izquierda-taller`).click(function() {
        if(numTaller <= 1) {
            numTaller = 1;
        } else {
            numTaller--;
            $(".taller").css({"display":"none"});
            $(`#taller-${numTaller}`).fadeIn(1000);
        }
    });

    $(`#flecha-derecha-taller`).click(function() {
        if(numTaller >= 5) {
            numTaller = 5;
        } else{
            numTaller++;
            $(".taller").css({"display":"none"});
            $(`#taller-${numTaller}`).fadeIn(1000);
        }
    });
});