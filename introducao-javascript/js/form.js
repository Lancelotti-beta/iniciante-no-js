const tabela = document.getElementById('tabela-pacientes');
const botaoForm = document.getElementById('adicionar-paciente');
const novoPaciente = document.getElementById('form-adiciona');
const mensagemErro = document.getElementById('erro');

botaoForm.addEventListener('click', (e) => {
    e.preventDefault();
    adicionaNaTabela();
    novoPaciente.reset();
})

function criaFormularioDoPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImcDoPaciente(form.altura.value, form.peso.value)
    }

    return paciente;
}

function adicionaNaTabela() {
    var paciente = criaFormularioDoPaciente(novoPaciente);

    if (validaAltura(paciente.altura) && validaPeso(paciente.peso)) {
        colocaTabelaDoUserNaPagina(paciente);
        mensagemErro.innerHTML = "";
    } else {
        mostraErroDeFormDoUser(paciente);
        return;
    }
}

function colocaTabelaDoUserNaPagina(paciente) {
    tabela.innerHTML += `
        <tr class="paciente">
            <td class="info-nome">${paciente.nome}</td> 
            <td class="info-peso">${paciente.peso}</td>
            <td class="info-altura">${paciente.altura}</td> 
            <td class="info-gordura">${paciente.gordura}</td> 
            <td class="info-imc">${paciente.imc}</td>
        </tr>
    `;
}

function mostraErroDeFormDoUser(paciente) {
    var erro = erroDeValor(paciente);
    mensagemErro.innerHTML = "";
    
    erro.forEach(function (erro) {
        var li = document.createElement('li');
        li.innerHTML = erro;
        mensagemErro.appendChild(li);
    });
}

function erroDeValor(paciente) {
    var arrayErro = [];
    if (paciente.nome.length == 0) {
        arrayErro.push(` Nome Inválida! O valor Nome não pode ser vazio`);
    }
    
    if (!validaPeso(paciente.peso)) {
        arrayErro.push(` Peso Inválida!`);
    }

    if (!validaAltura(paciente.altura)) {
        arrayErro.push(` Altura Inválida!`);
    }

    if (paciente.peso.length == 0) {
        arrayErro.push(` Valor Inválida! O valor de Peso não pode estar vazio`);
    }

    if (paciente.altura.length == 0) {
        arrayErro.push(` Valor Inválida! O valor de Altura não pode estar vazio`);
    }
    
    if (paciente.gordura.length == 0) {
        arrayErro.push(` Valor Inválida! O valor Percentual de Gordura não pode estar vazio`);
    }

    return arrayErro;
}

