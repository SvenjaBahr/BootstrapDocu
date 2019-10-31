$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});