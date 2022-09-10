$(document).ready(function() {

    $("input").on("change", function() {
        $(this).addClass('validate');
        var isInvalid = $(this).is(':invalid');
        $(this).attr('aria-invalid', isInvalid);
    });
    $('[type="submit"]').on("click", function(){
        $('#form input').addClass('validate');
    });

});