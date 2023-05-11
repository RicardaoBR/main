
const form = document.getElementById('form_dep');

form.addEventListener('submit', function(e){

    let nome = document.getElementById('nome').value;
    let cadeado = document.getElementById('cadeado').value;
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if(nome.value != "Joao"){

        usuario.style.display = 'block';
        document.querySelector('.usuario').style.display = 'block';

    }else if(cadeado.value != "123"){  

        senha.style.display = 'block';   
        document.querySelector('.usuario').style.display = 'block';

    }
    
})