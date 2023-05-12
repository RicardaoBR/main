
const form = document.getElementById('form_dep');
var resultado = 0;
var vetor = [];
var i = 0;
var resultado_mostrar = document.getElementById('resultado_mostrar').value;
const ContainerMsg = document.querySelector('resultado_mostrar')


function media(){ 
    alert(resultado/vetor.length);
    resultado_mostrar.innerHTML = resultado/vetor.length
}

function adicionando(){
    resultado += parseInt(document.getElementById('nota').value);
    console.log(resultado);
    event.preventDefault();
    i += 1
    vetor.push(parseInt(document.getElementById('nota').value))
    document.getElementById('nota').value = "";
}
