var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var tabelaPaciente = document.querySelector('#paciente1')

var pesoDoPaciente = tabelaPaciente.querySelector('.info-peso').textContent;
var alturaDoPaciente = tabelaPaciente.querySelector('.info-altura').textContent;
var calculoImc = tabelaPaciente.querySelector('.info-imc');

var imc = pesoDoPaciente / (alturaDoPaciente * alturaDoPaciente);

var peso = true;
var altura = true;

if (pesoDoPaciente <= 0 || pesoDoPaciente >= 600) {
    peso = false;
    calculoImc.textContent = 'Peso Invalido!';
}

if (alturaDoPaciente <= 0 || alturaDoPaciente >= 3.00) {
    altura = false;
    calculoImc.textContent = 'Altura Invalida!';
}

if (peso && altura) {
    calculoImc.textContent = imc;
}



/*
//>>>>>> Uma meneira alternativa de fazer o exercicio. só tem que tomar cuidado com o operador '&&' pois
// quando se usa ele tem que dar true nas duas validações. no meu caso, pesso e a altura, mas queremos evitar em qualquer
// um dos "parametros"
if ((pesoDoPaciente <= 0 || pesoDoPaciente >= 600) || (alturaDoPaciente <= 0 || alturaDoPaciente >= 3.00)) {
    calculoImc.textContent = 'Peso ou Altura Invalido!';
} else {
    calculoImc.textContent = imc;
}
*/