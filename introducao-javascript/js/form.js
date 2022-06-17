const tabela = document.getElementById('tabela-pacientes');
const botaoForm = document.getElementById('adicionar-paciente');
const novoPaciente = document.getElementById('form-adiciona');

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



