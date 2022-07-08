let tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", e => {
    e.target.parentNode.classList.add("fadeOut")
    setTimeout(() => e.target.parentNode.remove(), 500);
})