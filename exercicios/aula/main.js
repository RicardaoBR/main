let formValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ')

    return nomeComoArray.lenght >= 2;
}


const form = document.getElementById('form_dep');

form.addEventListener('submit', function(e){

    let formValido = false;

    formValido = validaNome(nomeBeneficiario.value);

    if(formValido){
        alert('Sucesso');
    }else{
        alert('Falhou');
    }
})

console.log(formValido);