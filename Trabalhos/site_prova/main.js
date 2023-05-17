const form = document.getElementById('form_dep');
var vetor = [];

form.addEventListener('submit', function(e){

    event.preventDefault();
    vetor.push(document.getElementById('nome').value);
    vetor.push(document.getElementById('valor').value);
    vetor.push(document.getElementById('loja').value);
    vetor.push(document.getElementById('avaliaçao').value);

    document.getElementById('nome2').innerHTML = vetor[0];
    document.getElementById('loja2').innerHTML = vetor[1];
    document.getElementById('valor2').innerHTML = vetor[2];
    document.getElementById('avaliaçao').innerHTML = vetor[3];
    
})