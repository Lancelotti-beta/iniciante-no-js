var botaoBuscaPaciente = document.getElementById('buscar-pacientes');

botaoBuscaPaciente.addEventListener('click', function(){

    //https://api-pacientes.herokuapp.com/pacientes
    console.log('buscando . . .');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){
        var error = document.getElementById('resquisicao-erro');
        if(xhr.status == 200){
            error.classList.add('invisivel');
            var resposta = xhr.responseText;
            var paciente = JSON.parse(resposta);
    
            paciente.forEach(function (pacientes){
                colocaTabelaDoUserNaPagina(pacientes);
            });
            console.log('Concluido!');
        }else{

            error.classList.remove('invisivel');
            var tipo = xhr.status;
            var descricacao = xhr.responseText;
            error.innerHTML = `Type error: ${tipo} erro: ${descricacao}`;
        }
    });

    xhr.send();
    error.innerHTML = "";
});

