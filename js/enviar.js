function enviar() {

    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var rg = document.getElementById("rg");
    var sexo = document.getElementById("sexo");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var bairro = document.getElementById("bairro");
    var cep = document.getElementById("cep");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");
    var fixo = document.getElementById("telefonefixo");
    var celular = document.getElementById("telefonecelular");

    if ( nome.value == "" || cpf.value == "" || endereco.value == "" || numero.value == "" || celular.value == "") {
        alert('O formulário não foi preenchido corretamente.');
    } else {
        alert('Obrigado sr(a) ' + nome.value + ', os seus dados foram encaminhados com sucesso: ');
        document.getElementById("form-cadastro").submit();
    }
}