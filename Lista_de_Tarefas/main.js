$(document).ready(function(){
    $('header button').click(function(e){
        $('form').slideDown();
    })

    $('#botao_cancelar').click('submit', function(e){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){ 
        e.preventDefault();
        const tarefaNova = $('#tarefa').val();
        const novoItemLista = $('<li style = "display: none;"></li>');
        $(`<h1>${tarefaNova}</h1>`).appendTo(novoItemLista);
        $(novoItemLista).appendTo('ul');
        $(novoItemLista).fadeIn(100);
        $('#tarefa').val('')
    })
})