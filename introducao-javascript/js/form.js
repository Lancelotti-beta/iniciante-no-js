const tabela = document.getElementById('tabela-pacientes');
const botaoForm = document.getElementById('adicionar-paciente');
const novoPaciente = document.getElementById('form-adiciona');

botaoForm.addEventListener('click', (e) => {
    e.preventDefault();
    adicionaNaTabela();
})

function criaFormularioDoPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }

    return paciente;
}

function adicionaNaTabela(){
    var paciente = criaFormularioDoPaciente(novoPaciente);

    imc = calculaImcDoPaciente(paciente.altura, paciente.peso);
    tabela.innerHTML += `
        <tr>
            <td>${paciente.nome}</td> 
            <td>${paciente.peso}</td>
            <td>${paciente.altura}</td> 
            <td>${paciente.gordura}</td> 
            <td>${imc}</td>
        </tr>
    `;

    paciente.nome = " ";
    paciente.peso = " ";
    paciente.altura = " ";
    paciente.gordura = " ";
}



