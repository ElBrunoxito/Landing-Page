document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const opciones = document.querySelector('.opciones');
    const btnIniciar = document.querySelector(".iniciar");
    
  
    menuToggle.addEventListener('click', function() {
      opciones.classList.toggle('active'); // Alterna la clase 'active' para mostrar u ocultar las opciones
    });

    btnIniciar.addEventListener('click',(e)=>{
        e.preventDefault();
        alert("Gracias :)\nLa pagina esta en construccion ↑↑");
    })
});