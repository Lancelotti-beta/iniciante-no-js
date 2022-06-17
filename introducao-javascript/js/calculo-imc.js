function calculaImcDoPaciente(altura, peso) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

export default {calculaImcDoPaciente};
