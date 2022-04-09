// function checkAge (age) {
//   (age > 18) ? true : confirm("Tienes permisos de tus padres?");
// }

// //otra version de la funcion

// function revisarEdad (edad) {
//   return (edad > 18) || confirm('Tienes permiso de tus padres')
// }

//funcion de devolver el valor menor
// let a = +prompt('Ingresa el primer valor')
// let b = +prompt('Ingresa el primer valor')
// function searchMin (a, b) {
//   (a < b) ? alert(`El numero menor es  ${a}`) : alert(`El numero menor es  ${b}`);
// }

// searchMin(a, b)

//funcion de exponentes

// let x = Number(prompt('x?'))
// let n = Number(prompt('n?'))
// pow (x, n)
// function pow(x,n) {
//   if (n >= 1) {
//   alert(x ** n);
//   } else {
//     alert('Numero invalido')
//   }
// }

// manera de exponte sin utilizar los operadores

// let x = parseInt(prompt("x?"));
// let n = parseInt(prompt("n?"));

// pow(x, n)
// function pow(x, n) {
//   resultado = x
//   for(i = 1; i < n; ++i ) {
//     resultado *= x
//   }
//   alert(resultado)
// }

//funciones callback callbacks

// function pregunta(pregunta, si, no) {
//   if (confirm(pregunta)) {
//     si();
//   } else {
//     no();
//   }
// }

// function respuestaSi() {
//   alert("Se acepto la ejecucion");
// }

// function respuestaNo() {
//   alert("Se cancelo la ejecucion");
// }

// pregunta("Ejecutamos la funcion?", respuestaSi, respuestaNo);

//otro ejemplo de funciones callbacks

function pregunta(pregunta, si, no) {
  if (confirm(pregunta)) {
    si();
  } else {
    no();
  }
}

pregunta(
  "Ejecutamos la funcion?",
  function () {
    alert("Se acepto la ejecucion");
  },
  function () {
    alert("Se cancelo la ejecucion");
  }
);
