$(document).ready(function () {
    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
    })

    $('.menu_hamburger').click(function () {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(12)34567-8901'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '12345-678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculo_interesse: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço_completo: {
                required: true
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor informe seu nome completo!',
            telefone: 'Por favor informe seu telefone!',
            email: 'Por favor informe seu email!',
            veiculo_interesse: 'Por favor informe o veiculo do seu interesse!',
            cpf: 'Por favor, informe seu CPF',
            endereço_completo: 'Por favor, informe seu endereço',
            cep: 'Por favor, informe seu CEP completo',
        },

        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numbersOfInvalids();
            if(cmaposIncorretos){
                alert(`Existem ${camposIncorretos} campos Incorretos`)   
            }
        }
    })

    $('.lista_veiculos button').click(function(){
        const destino = $('#formulario');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo_interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        })

    })
})

