let user = prompt("Escribe el usuario");
if (user === "Admin") {
  let password = prompt("Cual es la contraseña?");
  if (password === "TheMaster") {
    alert("Bienvenido!");
  } else if (password === "" || password === null) {
    alert("Cancelado");
  } else {
    alert("Contraseña incorrecta");
  }
} else if (user === null || user === "") {
  alert("Cancelado");
} else {
  alert("No te conozco");
}
