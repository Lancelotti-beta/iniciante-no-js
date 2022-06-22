var paciente = document.querySelector('tbody');

paciente.addEventListener('dblclick', function (e) {
    e.target.parentNode.classList.add('fadeOut');
    setTimeout(() => {
        e.target.parentNode.remove();
    }, 600);
});

