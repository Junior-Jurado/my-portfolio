document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-menu-link');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            
            const targetId = this.getAttribute('href'); // Obtiene el ID del elemento de destino
            const targetOffset = document.querySelector(targetId).offsetTop; // Calcula la posición del elemento de destino
            const headerOffset = document.querySelector('.header').offsetHeight; // Altura de la barra de navegación

            const scrollTo = targetOffset - headerOffset - 20; // Ajusta la posición de desplazamiento para mostrar el contenido correctamente

            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth' // Desplazamiento suave
            });
        });
    });
       
});

function addRecommendation(event) {
    event.preventDefault(); // Evita la acción predeterminada del formulario
    
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    var newRecommendation = document.createElement('div');
    newRecommendation.classList.add('card-recommen');

    if (name === "") {
        newRecommendation.innerHTML = '<p> \"' + message + '\"</p>';
    } else {
        newRecommendation.innerHTML = '<p>' + name + ': \"' + message + '\"</p>';
    }
    var recommendationContainer = document.querySelector('.grid-container-recommen');
    recommendationContainer.appendChild(newRecommendation);

    document.getElementById('name').value = '';
    document.getElementById('message').value = '';

    showPopup();
  
}

function showPopup() {
    document.getElementById('overlay').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
  }
  

