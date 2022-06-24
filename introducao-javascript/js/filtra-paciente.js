var inputBuscaDePaciente = document.querySelector('#filtre-paciente');

inputBuscaDePaciente.addEventListener('input', function() {
    buscaPaciente();
})

function buscaPaciente() {
    var pacientes = document.querySelectorAll('.paciente');
    var list = [];
    pacientes.forEach(function(paciente){
        list.push(paciente.querySelector('.info-nome').textContent);
    });
    
    return console.log(list);
}

