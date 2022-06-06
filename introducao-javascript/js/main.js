var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

const tabela = document.getElementById('tabela-pacientes');
var tabelaPaciente = document.querySelectorAll('.paciente');

for (let index = 0; index < tabelaPaciente.length; index++) {
    var paciente = tabelaPaciente[index];
    var pesoDoPaciente = tabelaPaciente[index].querySelector('.info-peso').textContent;
    var alturaDoPaciente = tabelaPaciente[index].querySelector('.info-altura').textContent;
    var calculoImc = tabelaPaciente[index].querySelector('.info-imc');
    
    var imc = pesoDoPaciente / (alturaDoPaciente * alturaDoPaciente);
    
    var peso = true;
    var altura = true;
    
    if (pesoDoPaciente <= 0 || pesoDoPaciente >= 600) {
        peso = false;
        calculoImc.textContent = 'Peso Invalido!';
        paciente.classList.add('paciente-invalido');
    }
    
    if (alturaDoPaciente <= 0 || alturaDoPaciente >= 3.00) {
        altura = false;
        calculoImc.textContent = 'Altura Invalida!';
        paciente.classList.add('paciente-invalido');
    }
    
    if (peso == false && altura == false) {
        calculoImc.textContent = 'Valores Invalidos!';
        paciente.classList.add('paciente-invalido');

    } else if (peso && altura) {
        calculoImc.textContent = imc.toFixed(2);
        
    }
}

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

