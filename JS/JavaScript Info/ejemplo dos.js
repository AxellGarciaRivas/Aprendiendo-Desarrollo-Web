let edad = confirm("Eres mayor de edad?");

if (edad === true) {
  let nombre = prompt(`Cual es tu nombre`);
  alert(`${nombre} es un bonito nombre`);
} else {
  alert(`No puedes hacer la encuesta eres menor de edad!`);
}
