
const form = document.getElementById('form_dep');
var resultado = 0;
var vetor = [];
var i = 0;
var media
var img = document.querySelector('#aprovado_imagem');

function media(){ 
    event.preventDefault();
    var media = resultado/vetor.length;
    document.getElementById('resultado_mostrar').innerHTML = "Média: "+ media;
    document.getElementById('resultado_mostrar').style.display = 'block';
    if(media == 10){
        document.getElementById('aprovado').innerHTML = "Aprovado com louvor ";
        document.getElementById('resultado_mostrar').style.backgroundColor = 'green';
        document.getElementById('aprovado').style.backgroundColor = 'green';
        img.setAttribute('src', '/Midia/chapeu.png');
    }else if(media > 6){
        document.getElementById('aprovado').innerHTML = "Aprovado ";
        document.getElementById('resultado_mostrar').style.backgroundColor = 'yellow';
        document.getElementById('aprovado').style.backgroundColor = 'yellow';
        img.setAttribute('src', '/Midia/aprovado.png');
    }else{
        document.getElementById('aprovado').innerHTML = "Reprovado ";
        document.getElementById('resultado_mostrar').style.backgroundColor = 'red';
        document.getElementById('aprovado').style.backgroundColor = 'red';
        img.setAttribute('src', '/Midia/reprovado.png');
    }
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
