/*
    JavaScript (main.js)
    Maneja la lógica para el menú de navegación responsive (hamburguesa).
*/

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Obtener los elementos del DOM
    
    // Obtener el botón de hamburguesa por su ID
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    
    // Obtener el menú de navegación (navbar) por su ID
    const navBar = document.getElementById('navBar');

    // 2. Verificar que los elementos existan
    if (hamburgerMenu && navBar) {
        
        // 3. Añadir el 'escuchador' de eventos (EventListener)
        
        // Ejecutar esta función cuando se haga clic en el ícono de hamburguesa
        hamburgerMenu.addEventListener('click', function() {
            
            // Alternar (toggle) la clase 'active' en el ícono de hamburguesa
            // Esto activa la animación de la 'X' en CSS
            hamburgerMenu.classList.toggle('active');
            
            // Alternar (toggle) la clase 'active' en la barra de navegación
            // Esto hace que el menú aparezca o desaparezca (controlado por CSS)
            navBar.classList.toggle('active');
            
        });
    } else {
        // Mensaje de error si no se encuentran los elementos (útil para depurar)
        console.error("No se encontraron los elementos del menú (hamburgerMenu o navBar).");
    }

});
