$(document).ready(function () {
    $('#botao_menos').click(function (e) {
        $('#seçoes').slideUp();
        $('#botao_mais').css("opacity", "1");
    })

    $('#botao_mais').click('submit', function (e) {
        $('#seçoes').slideDown();
        $('#botao_mais').css("opacity", "0");
    })

    $('#botao_cancelar').click('submit', function (e) {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const endereçoDaNovaImagem = $('#endereço_imagem').val();
        const novoItem = $('<li style = "display: none;"></li>');
        $(`<img src= "${endereçoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
                <div class="image_link">
                    <a href="${endereçoDaNovaImagem}" alt="Tamanho real" target="_blank">
                        Ver imagem original
                    </a>
                </div>
            `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereço_imagem').val('')
    })

    $('#seçao_pessoal').click(function () {
        $('#seçao_pessoal_pagina').hide(1000);
        if ($('#seçao_pessoal_pagina').is(':hidden')) {
            $('#seçao_pessoal_pagina').show(1000);
        }
        $('#seçao_galeria_pagina').hide(1000);
        $('#seçao_filmes_pagina').hide(1000);
        $('#seçao_livros_pagina').hide(1000);
        $('#seçao_escritas_pagina').hide(1000);

    })

    $('#seçao_galeria').click(function () {
        $('#seçao_galeria_pagina').hide(1000);
        if ($('#seçao_galeria_pagina').is(':hidden')) {
            $('#seçao_galeria_pagina').show(1000);
        }
        $('#seçao_pessoal_pagina').hide(1000);
        $('#seçao_filmes_pagina').hide(1000);
        $('#seçao_livros_pagina').hide(1000);
        $('#seçao_escritas_pagina').hide(1000);
    })

    $('#seçao_filmes').click(function () {
        $('#seçao_filmes_pagina').hide(1000);
        if ($('#seçao_filmes_pagina').is(':hidden')) {
            $('#seçao_filmes_pagina').show(1000);
        }
        $('#seçao_pessoal_pagina').hide(1000);
        $('#seçao_galeria_pagina').hide(1000);
        $('#seçao_livros_pagina').hide(1000);
        $('#seçao_escritas_pagina').hide(1000);
    })

    $('#seçao_livros').click(function () {
        $('#seçao_livros_pagina').hide(1000);
        if ($('#seçao_livros_pagina').is(':hidden')) {
            $('#seçao_livros_pagina').show(1000);
        }
        $('#seçao_pessoal_pagina').hide(1000);
        $('#seçao_galeria_pagina').hide(1000);
        $('#seçao_filmes_pagina').hide(1000);
        $('#seçao_escritas_pagina').hide(1000);
    })

    $('#seçao_escritas').click(function () {
        $('#seçao_escritas_pagina').hide(1000);
        if ($('#seçao_escritas_pagina').is(':hidden')) {
            $('#seçao_escritas_pagina').show(1000);
        }
        $('#seçao_pessoal_pagina').hide(1000);
        $('#seçao_galeria_pagina').hide(1000);
        $('#seçao_filmes_pagina').hide(1000);
        $('#seçao_livros_pagina').hide(1000);
    })

    $('#botao_abrir_seçoes').click('submit', function (e) {
        $('seçoes').slideUp();
    })




    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(12)34567-8901'
    })
})