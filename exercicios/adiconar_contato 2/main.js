const container = document.getElementById('container');


container.addEventListener('submit', function(e){
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const contato = document.getElementById('contato').value;

    let linha = '<div>' 
    linha += `<h1>${nome + contato}</h1>`;
    linha += '</dvi>'
    
    const container = document.querySelector('div')
    container.innerHTML = linha;

    inputNomeAtividade = '';
    inputNotaAtividade = '';
})