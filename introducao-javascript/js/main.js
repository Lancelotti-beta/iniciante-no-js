var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

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
const tabela = document.getElementById('tabela-pacientes')

const nome = document.querySelector('#nome');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const gordura = document.querySelector('#gordura');

botaoForm.addEventListener('click', (e) => {
    e.preventDefault();
    adicionaNaTabela();
})

function adicionaNaTabela(){
    tabela.innerHTML = `<td>${nome.value}</td> <td>${peso.value}</td> <td>${altura.value}</td> <td>${gordura.value}</td>`;

    nome.value = " ";
    peso.value = " ";
    altura.value = " ";
    gordura.value = " ";
}


