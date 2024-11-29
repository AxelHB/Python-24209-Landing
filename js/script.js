//deshabilitar la selección de texto y el clic derecho
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
//deshabilitar arrastre
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});


/*SIDEBAR DESPLEGABLE*/ 
document.addEventListener("DOMContentLoaded", () => {
    const toggleMenuButton = document.getElementById("toggle-menu");
    const menu = document.getElementById("menu");

    // Verificar si los elementos existen
    if (!toggleMenuButton || !menu) {
        console.error("Elementos del menú no encontrados");
        return;
    }

    // Mostrar/Ocultar el menú con animación
    toggleMenuButton.addEventListener("click", () => {
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
            setTimeout(() => {
                menu.classList.add("hidden");
            }, 300); // Tiempo de la animación en milisegundos
        } else {
            menu.classList.remove("hidden");
            setTimeout(() => {
                menu.classList.add("show");
            }, 10); // Pequeño retraso para asegurar que la transición se aplica
        }
    });

    // Ocultar el menú al hacer clic en un enlace
    menu.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            menu.classList.remove("show");
            setTimeout(() => {
                menu.classList.add("hidden");
            }, 300); // Tiempo de la animación
        }
    });
});


