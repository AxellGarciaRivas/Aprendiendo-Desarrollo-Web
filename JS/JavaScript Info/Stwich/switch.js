switch (navegador) {
  case "Edge":
    alert("¡Tienes Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Esta bien, soportamos estos navegadores también");
    break;

  default:
    alert("¡Esperamos que esta página se vea bien!");
}

if (navegador === "Edge") {
  alert("Tienes Edge");
} else if (
  navegador === "Chrome" ||
  navegador === "Firefox" ||
  navegador === "Safari" ||
  navegador === "Opera"
) {
  alert("Esta bien, soportamos estos navegadores tambien");
} else {
  alert("Esperamos que esta pagina se vea bien");
}

let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2, 3");
    break;
    
  default:
    break;
}
