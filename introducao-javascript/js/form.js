const tabela = document.getElementById('tabela-pacientes');
const botaoForm = document.getElementById('adicionar-paciente');
const novoPaciente = document.getElementById('form-adiciona');
const mensagemErro = document.querySelectorAll('#erro');

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

function adicionaNaTabela(){
    var paciente = criaFormularioDoPaciente(novoPaciente);

    if(validaAltura(paciente.altura) && validaPeso(paciente.peso)){
        tabela.innerHTML += `
            <tr class="paciente">
                <td class="info-nome">${paciente.nome}</td> 
                <td class="info-peso">${paciente.peso}</td>
                <td class="info-altura">${paciente.altura}</td> 
                <td class="info-gordura">${paciente.gordura}</td> 
                <td class="info-imc">${paciente.imc}</td>
            </tr>
        `;
        mensagemErro.innerHTML = "";
    } else {
        var erro = erroDeValor(paciente.nome, paciente.peso, paciente.altura, paciente.gordura);
        erro.forEach(function(arrayErro) {
            var li = document.createElement('li');
            li = arrayErro;
            mensagemErro.innerHTML = li;
        });
        return;
    }
}

function erroDeValor(nome, peso, altura, gordura){
    var arrayErro = [];
    if(nome.length == 0) arrayErro.push(` Nome Inválida! O valor Nome não pode ser vazio`);

    if(!validaAltura(altura)){
        arrayErro.push(` Altura Inválida!`); 
    } else if (altura.length == 0){
        arrayErro.push(` Valor Inválida! O valor de Altura não pode estar vazio`);
    }

    if(!validaPeso(peso)){
        arrayErro.push(` Peso Inválida!`);
    } else if (peso.length == 0){
        arrayErro.push(` Valor Inválida! O valor de Peso não pode estar vazio`);
    }

    if(gordura.length == 0) arrayErro.push(` Valor Inválida! O valor Percentual de Gordura não pode estar vazio`);

    return arrayErro;
}

