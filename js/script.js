/* Validar CPF */
function _cpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}

function validarNome(valor) {
    if (valor.value == "") {
        document.getElementById("nome").style.backgroundColor = "#fcc9c9";
    } else {
        document.getElementById("nome").style.backgroundColor = "#fff";
    }
}

function validarCPF(el) {
    if (!_cpf(el.value)) {
        document.getElementById("cpf").style.backgroundColor = "#fcc9c9";
        el.value = "";
    } else {
        document.getElementById("cpf").style.backgroundColor = "#fff";
    }
}

function validarRG(valor) {
    if (valor.value == "") {
        document.getElementById("rg").style.backgroundColor = "#fcc9c9";
    } else if (Number.isInteger(parseInt(valor.value))) {
        document.getElementById("rg").style.backgroundColor = "#fff";
    } else {
        document.getElementById("rg").style.backgroundColor = "#fcc9c9";
        valor.value = "";
    }
}

function validarEndereco(valor) {
    if (valor.value == "") {
        document.getElementById("rua").style.backgroundColor = "#fcc9c9";
    } else {
        document.getElementById("rua").style.backgroundColor = "#fff";
    }
}

function validarNumero(valor) {
    if (valor.value == "") {
        document.getElementById("numero").style.backgroundColor = "#fcc9c9";
    } else if (Number.isInteger(parseInt(valor.value))) {
        document.getElementById("numero").style.backgroundColor = "#fff";
    } else {
        document.getElementById("numero").style.backgroundColor = "#fcc9c9";
        valor.value = "";
    }
}

function validarTelefoneCelular(valor) {
    if (valor.value == "") {
        document.getElementById("telefonecelular").style.backgroundColor = "#fcc9c9";
    } else {
        document.getElementById("telefonecelular").style.backgroundColor = "#fff";
    }
}

function limpar() {
    document.getElementById('nome').reset();
    document.getElementById("telefonecelular").style.backgroundColor = "#fff";
}

/* Enviar formulário */
const formularioDeCadastro = document.getElementById('form-cadastro')

formularioDeCadastro.addEventListener('submit', function (e) {
    e.preventDefault()

    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let rg = document.getElementById('rg').value;
    let sexo = document.getElementById('sexo').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('numero').value;
    let uf = document.getElementById('uf').value;
    let cep = document.getElementById('cep').value;
    let telefonefixo = document.getElementById('telefonefixo').value;
    let telefonecelular = document.getElementById('telefonecelular').value;

    if (sexo == "F") {
        sexo = "Feminino";
    } else {
        sexo = "Masculino";
    }

    fetch('https://webhook.site/1e73cb36-6a92-4ce6-a03a-e2eabbf10172', {
        method: 'POST',
        body: JSON.stringify({
            nome: nome,
            cpf: cpf,
            rg: rg,
            sexo: sexo,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
            cep: cep,
            telefonefixo: telefonefixo,
            telefonecelular: telefonecelular
        })
    }).then(response => {
        if (response.status === 200) {
            alert('Mensagem enviada');
            document.getElementById('nome').value = "";
        } else {
            alert("ERROR");
        }
    })

    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("rg").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("telefonefixo").value = "";
    document.getElementById("telefonecelular").value = "";

})

/* Autocompleta CEP CPF */
/*function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}*/

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            //document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            //document.getElementById('uf').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};