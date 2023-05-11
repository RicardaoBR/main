

addEventListener('submit', function(e){

    var nome = document.getElementById('nome').value;
    var cadeado = document.getElementById('cadeado').value;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(nome != "Joao"){
        usuario.style.display = 'block';
    }
    if(cadeado != "123"){  
        senha.style.display = 'block';   
    }
})