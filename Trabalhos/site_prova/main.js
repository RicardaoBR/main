$(document).ready(function () {

    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
    })

    $('#seçao_pessoal').click(function () {
        $('#seçao_pessoal_pagina').hide(1000);
        if ($('#seçao_pessoal_pagina').is(':hidden')) {
            $('#seçao_pessoal_pagina').show(1000);
        }
        if ($('#seçao_galeria_pagina' || '#seçao_filmes_pagina' || '#seçao_livros_pagina' || 'seçao_escritas_pagina').is(':visible')) {
            $('#seçao_galeria_pagina', '#seçao_filmes_pagina', '#seçao_livros_pagina', 'seçao_escritas_pagina').hide(1000);
        }
    })

    $('#seçao_galeria').click(function () {
        $('#seçao_galeria_pagina').hide(1000);
        if ($('#seçao_galeria_pagina').is(':hidden')) {
            $('#seçao_galeria_pagina').show(1000);
        }
    })

    $('#seçao_filmes').click(function () {
        $('#seçao_filmes_pagina').hide(1000);
        if ($('#seçao_filmes_pagina').is(':hidden')) {
            $('#seçao_filmes_pagina').show(1000);
        }
    })

    $('#seçao_livros').click(function () {
        $('#seçao_livros_pagina').hide(1000);
        if ($('#seçao_livros_pagina').is(':hidden')) {
            $('#seçao_livros_pagina').show(1000);
        }
    })

    $('#seçao_escritas').click(function () {
        $('#seçao_escritas_pagina').hide(1000);
        if ($('#seçao_escritas_pagina').is(':hidden')) {
            $('#seçao_escritas_pagina').show(1000);
        }
    })




    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(12)34567-8901'
    })
})