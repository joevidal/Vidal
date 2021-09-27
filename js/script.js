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
        document.getElementById("endereco").style.backgroundColor = "#fcc9c9";
    } else {
        document.getElementById("endereco").style.backgroundColor = "#fff";
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
    let rua = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('numero').value;
    let estado = document.getElementById('estado').value;
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
            endereco: endereco,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
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
    document.getElementById("endereco").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("telefonefixo").value = "";
    document.getElementById("telefonecelular").value = "";

})

/* Autocompleta CEP CPF */
/*function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('endereco').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('estado').value = ("");
}*/