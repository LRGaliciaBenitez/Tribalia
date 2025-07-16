const botonMenu = document.querySelector(".bi-list");
const menuLateral = document.querySelector(".main__menuLateral");
const botonCerrar = document.querySelector(".bi-x-lg");

botonMenu.addEventListener("click", () => {
    menuLateral.classList.toggle("active");
})

botonCerrar.addEventListener("click", () => {
    menuLateral.classList.remove("active");
})


document.querySelectorAll(".btnToggle").forEach(button => {
    button.addEventListener("click", () => {

        const tarjeta = button.closest(".main__informacion--tarjeta");
        tarjeta.classList.toggle("mostrar");

        const texto = tarjeta.querySelector(".texto-oculto");
        texto.classList.toggle("mostrar");
        
        button.innerHTML = texto.classList.contains("mostrar") ? `Mostrar menos <i class="bi bi-arrow-up-short"></i>` : `Mostrar más <i class="bi bi-arrow-down-short"></i>`;
    });
})