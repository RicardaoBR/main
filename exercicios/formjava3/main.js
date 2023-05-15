
const form = document.getElementById('form_dep');
var resultado = 0;
var vetor = [];
var media
var img = document.querySelector('#aprovado_imagem');

function media(){ 
    event.preventDefault();
    var media = resultado/vetor.length;
    document.getElementById('resultado_mostrar').innerHTML = "Média: "+ media;
    document.getElementById('resultado_mostrar').style.display = 'block';
    if(media >= 6){
        document.getElementById('resultado_mostrar').style.backgroundColor = '#2ccc71';
        img.setAttribute('src', '/Midia/aprovado.png');
    }else if(media < 6){
        document.getElementById('resultado_mostrar').style.backgroundColor = 'red';
        img.setAttribute('src', '/Midia/reprovado.png');
    }
    resultado = 0
    vetor.length = 0
}

function limparLixo(){
}

function adicionando(){
    resultado += parseInt(document.getElementById('nota').value);
    console.log(resultado);
    event.preventDefault();
    vetor.push(parseInt(document.getElementById('nota').value))
    document.getElementById('nota_inteira').innerHTML = "Nota Total: " + resultado + " Sera dividido por: " + vetor.length;
    document.getElementById('nota_inteira').style.display = 'block';
    document.getElementById('nota').value = "";
    
}
