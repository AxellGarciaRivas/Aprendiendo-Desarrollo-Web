//fusion de null es algo que ya existe pero lo mejoraron

//si "a" es diferente null y a undefined sera su valor en si, si no sera el valor de "b"
let a = a !== null && a !== undefined ? a : b;

//ahora simplificado

let c = c ?? d ? c : d;

let nombre;
let apellido;
let apodo = Superheroe;

alert(nombre ?? apellido ?? apodo);

//ejemplo de fusion de null
let saludo = prompt("Escribe un saludo");

function ejemploNull(saludo) {
  alert(saludo ?? "Texto predeterminado");
}

ejemploNull(saludo);
