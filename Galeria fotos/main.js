$(document).ready(function(){
    $('header button').click(function(e){
        $('form').slideDown();
    })

    $('#botao_cancelar').click('submit', function(e){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){ 
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
})