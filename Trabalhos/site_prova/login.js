$(document).ready(function () {
    $('#btnCriar').click(function () {
        
        if ($('#nome_completo').val() === '') {
            alert('Digite o seu nome completo.');
            return false;
        }
        if ($('#user_name').val() === '') {
            alert('Digite o seu nome de usuário.');
            return false;
        }
        if ($('#email').val() === '') {
            alert('Digite o seu email.');
            return false;
        }
        if ($('#user_password').val() === '') {
            alert('Digite uma senha.');
            return false;
        }
        if ($('#user_password2').val() === '') {
            alert('Digite a senha novamente para confirmação.');
            return false;
        }
        if ($('#user_password').val() !== $('#user_password2').val()) {
            alert('As senhas digitadas não coincidem.');
            return false;
        }
    });
});
