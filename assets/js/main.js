//quand la page est chargée (ready)
$(document).ready(function () {
    //si je double click
    $('#image').dblclick(function () {
        //je peux modifier la largeur de l'image qui a l'ID image
        $('#image').css('width', '450');
    });
});