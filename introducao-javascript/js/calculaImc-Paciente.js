var tabelaPaciente = document.querySelectorAll('.paciente');

for (let index = 0; index < tabelaPaciente.length; index++) {
    var paciente = tabelaPaciente[index];

    var nomeDoPaciente = valorDoPaciente(index, '.info-nome');
    var pesoDoPaciente = valorDoPaciente(index, '.info-peso');
    var alturaDoPaciente = valorDoPaciente(index, '.info-altura');
    var gorduraDoPaciente = valorDoPaciente(index, '.info-gordura');
    var calculoImc = tabelaPaciente[index].querySelector('.info-imc');
    
    var peso = validaPeso(pesoDoPaciente);
    var altura = validaAltura(alturaDoPaciente);
    var nome = validaNome(nomeDoPaciente);
    var gordura = validaGordura(gorduraDoPaciente);
    
    if (!peso) {
        calculoImc.textContent = 'Peso Invalido!';
        paciente.classList.add('paciente-invalido');
    }
    
    if (!altura) {
        calculoImc.textContent = 'Altura Invalida!';
        paciente.classList.add('paciente-invalido');
    }

    if (!nome) {
        calculoImc.textContent = 'Nome Invalida!';
        paciente.classList.add('paciente-invalido');
    }

    if (!gordura) {
        calculoImc.textContent = 'Percentual de Gordura Invalida!';
        paciente.classList.add('paciente-invalido');
    }

    if (!peso && !altura && !nome && !gordura) {
        calculoImc.textContent = 'Valores Invalidos!';
        paciente.classList.add('paciente-invalido');
    } else if (peso && altura && nome && gordura) {
        calculoImc.textContent = calculaImcDoPaciente(alturaDoPaciente, pesoDoPaciente);
    }
}

function validaNome(nome) {
    if (nome.length != 0 || nome > 0) {
        return true;
    } else {
        return false;
    }
}

function validaPeso(peso) {
    if(peso > 0 && peso <= 600){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura > 0 && altura <= 3.0){
        return true;
    } else {
        return false;
    }
}

function validaGordura(gordura){
    if (gordura.length != 0 || gordura > 0) {
        return true;
    } else {
        return false;
    }
}

function valorDoPaciente(i, string){
    var value = tabelaPaciente[i].querySelector(string);
    return value.textContent;
}

function calculaImcDoPaciente(altura, peso) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

