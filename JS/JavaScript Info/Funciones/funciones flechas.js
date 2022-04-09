// let suma = (a, b) => a + b;

// suma(2, 3);

// let resta = (c, d) => {
//   resultado = c - d;
//   return resultado;
// };

// resta(3,1);

// let edad = +prompt("Que edad tienes?");
// let entrada =
//   edad > 17 ? () => alert("Puedes pasar") : () => alert("No puedes pasar");

// entrada(edad);

let pregunta = (pregunta, si, no) => {
  confirm(pregunta) ? si() : no();
};

pregunta("Desea ejecutarlos?", () => alert('Aceptaste ejecutarlo'), () => alert('Cancelaste ejecutarlo'));

