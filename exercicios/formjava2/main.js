

addEventListener('submit', function(e){

    var nome = document.getElementById('nome');
    var cadeado = document.getElementById('cadeado');
    var usuario = document.getElementById('usuario');
    var senha = document.getElementById('senha');

    if(nome == "Joao Roberto"){
    }else{
        usuario.style.display = 'block';
    }
    if(cadeado == "123"){  
    }else{
        senha.style.display = 'block';   
        this.stop;
    }
})