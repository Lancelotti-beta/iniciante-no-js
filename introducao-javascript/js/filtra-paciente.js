var inputBuscaDePaciente = document.querySelector('#filtre-paciente');

inputBuscaDePaciente.addEventListener('input', function() {

    buscaPaciente(this.value);
})

function buscaPaciente(input) {
    var pacientes = document.querySelectorAll('.paciente');

    if(input.length > 0) {
        
        pacientes.forEach(function(paciente){
            var nomeDaTabela = paciente.querySelector('.info-nome');
            var nome = nomeDaTabela.textContent;

            if(!RegExp(input, 'i').test(nome)){
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        });
    } else {

        pacientes.forEach(function(paciente){
            paciente.classList.remove('invisivel');
        });
    }
}

