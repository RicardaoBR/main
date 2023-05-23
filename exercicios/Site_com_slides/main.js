$(document).ready(function () {
    $('#carrossel_imagens').slick({
        autoplay: true
    })

    $('.menu_hamburger').click(function () {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(12)34567-8901'
    })
})

