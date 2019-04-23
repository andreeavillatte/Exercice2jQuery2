//quand la page est chargée (ready)
$(document).ready(function () {
    //si je double click
    $('#image').dblclick(function () {
        //je peux modifier la largeur de l'image qui a l'ID image
        // $('#image').css('width', '450');
        // 'this' on l'a utilisé pour faire référence à l'élément déclancheur de la fonction
        // cette metode ou la suivante
        // $(this).css('width', '450');
        // suivante
        $(this).width(500) // on mets pas d'unités de mésure
    });
});