var paciente = document.querySelector('table');

paciente.addEventListener('dblclick', function (e) {
    e.target.parentNode.remove();
});

