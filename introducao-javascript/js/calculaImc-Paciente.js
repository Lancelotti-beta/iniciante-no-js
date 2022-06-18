var tabelaPaciente = document.querySelectorAll('.paciente');

for (let index = 0; index < tabelaPaciente.length; index++) {
    var paciente = tabelaPaciente[index];
    var pesoDoPaciente = tabelaPaciente[index].querySelector('.info-peso').textContent;
    var alturaDoPaciente = tabelaPaciente[index].querySelector('.info-altura').textContent;
    var calculoImc = tabelaPaciente[index].querySelector('.info-imc');
    
    var peso = validaPeso(pesoDoPaciente);
    var altura = validaAltura(alturaDoPaciente);
    
    if (!peso) {
        peso = false;
        calculoImc.textContent = 'Peso Invalido!';
        paciente.classList.add('paciente-invalido');
    }
    
    if (!altura) {
        altura = false;
        calculoImc.textContent = 'Altura Invalida!';
        paciente.classList.add('paciente-invalido');
    }
    
    if (!peso && !altura) {
        calculoImc.textContent = 'Valores Invalidos!';
        paciente.classList.add('paciente-invalido');
    } else if (peso && altura) {
        calculoImc.textContent = calculaImcDoPaciente(alturaDoPaciente, pesoDoPaciente);
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

function calculaImcDoPaciente(altura, peso) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

