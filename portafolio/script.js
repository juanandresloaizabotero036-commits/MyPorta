function cambiarTexto() {
    document.getElementById("mensaje").innerHTML = "¡bienvenido a javascript!";
}


const boton = document.getElementById("btn");
const mensaje = document.getElementById("texto");

boton.addEventListener("click", () => {
  boton.classList.toggle("activo");

  if (boton.classList.contains("activo")) {
    texto.style.color = "blue";
  } else {
    texto.style.color = "black";
  }
});
