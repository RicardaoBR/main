const form = document.getElementById('form_atividade');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome_atividade');
    const inputNotaAtividade = document.getElementById('nota_atividade');

    // alert(`Atividade: ${inputNomeAtividade.value}) - Nota: $(inputNotaAtividade.value)

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade >= 7 ? 'Aprovado': 'Reprovado'}</td>`;
    linha += '</tr>'

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linha;
})