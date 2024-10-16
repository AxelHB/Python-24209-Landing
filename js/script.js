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