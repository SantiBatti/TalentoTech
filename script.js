const miElemento = document.getElementById('miElemento');
window.onscroll = function() {
    if (window.scrollY > 100) { // Si el desplazamiento es mayor a 100px
        miElemento.classList.add('scrolled'); // Se agrega la clase 'scrolled'
    } else {
        miElemento.classList.remove('scrolled'); // Se quita la clase 'scrolled'
    }
};