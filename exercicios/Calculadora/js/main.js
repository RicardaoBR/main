$(document).ready(function () {
    const input = $("#calcular")
    let valorAnterior = null

    // resetar campo
    $("#resetar").on("click", function () {
        input.val("")
        valorAnterior = null
    })

    // escuta botões numericos
    $(".botaoNumerico").on("click", function () {
        let valorCalc = $(this).attr("value")
        input.val(`${input.val()}${valorCalc}`)
    })

    // escuta botões de operacoes
    $(".botaoOperacao").on("click", function () {
        let operacao = $(this).attr("value")
        if (valorAnterior === null) {
            valorAnterior = input.val()
            input.val("")
        } else {
            let concatenar = `${valorAnterior}${input.val()}`
            valorAnterior = eval(concatenar)
            input.val("")
        }
        input.val(`${input.val()}${operacao}`)
    })

    // calcular e mostrar resultado
    $("#Bresultado").on("click", function () {
        let operacaoCompleta = `${valorAnterior}${input.val()}`
        let resultado = eval(operacaoCompleta)
        input.val(resultado)
        valorAnterior = null
    })
})