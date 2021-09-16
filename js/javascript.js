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
});