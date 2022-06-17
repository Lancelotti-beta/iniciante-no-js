var tabelaPaciente = document.querySelectorAll('.paciente');

for (let index = 0; index < tabelaPaciente.length; index++) {
    var paciente = tabelaPaciente[index];
    var pesoDoPaciente = tabelaPaciente[index].querySelector('.info-peso').textContent;
    var alturaDoPaciente = tabelaPaciente[index].querySelector('.info-altura').textContent;
    var calculoImc = tabelaPaciente[index].querySelector('.info-imc');
    
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
        calculoImc.textContent = calculaImcDoPaciente(alturaDoPaciente, pesoDoPaciente)
        
    }
}

function calculaImcDoPaciente(altura, peso) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

