const botonMenu = document.querySelector(".bi-list");
const menuLateral = document.querySelector(".main__menuLateral");
const botonCerrar = document.querySelector(".bi-x-lg");

botonMenu.addEventListener("click", () => {
    menuLateral.classList.toggle("active");
})

botonCerrar.addEventListener("click", () => {
    menuLateral.classList.remove("active");
})