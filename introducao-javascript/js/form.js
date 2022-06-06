const tabela = document.getElementById('tabela-pacientes');
const botaoForm = document.getElementById('adicionar-paciente');
const novoPaciente = document.getElementById('form-adiciona');

const novoNome = novoPaciente.nome;
const novoPeso = novoPaciente.peso;
const novoAltura = novoPaciente.altura;
const novoGordura = novoPaciente.gordura;

function adicionaNaTabela(){
    imc = parseFloat(novoPeso.value) / (parseFloat(novoAltura.value) * parseFloat(novoAltura.value));
    tabela.innerHTML += `
        <tr>
            <td>${novoNome.value}</td> 
            <td>${novoPeso.value}</td>
            <td>${novoAltura.value}</td> 
            <td>${novoGordura.value}</td> 
            <td>${imc.toFixed(2)}</td>
        </tr>
    `;

    novoNome.value = " ";
    novoPeso.value = " ";
    novoAltura.value = " ";
    novoGordura.value = " ";
}

botaoForm.addEventListener('click', (e) => {
    e.preventDefault();
    adicionaNaTabela();
})

