
let resultado = document.getElementById('resultado');

addEventListener('submit', function(e){

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    if(num1 > num2){
        return resultado.innerHTML = "Primeiro é maior";
    }else if(num2 > num1){
        return resultado.innerHTML = "Segundo é Maior";
    }else{
        return resultado.innerHTML = "Os números são iguais";
    }
})