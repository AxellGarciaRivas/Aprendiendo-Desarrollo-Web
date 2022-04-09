// if y else tradicional
let edad = +prompt(`Que edad tienes?`)
if (edad < 3) {
  alert(`Eres un bebe!!!`)
} else if (edad < 18) {
  alert(`Hola joven`)
} else if (edad < 100) {
  alert(`Felicidades eres un adulto`)
} else {
  alert(`Que edad tan inusual!`)
}

// operador ternario en condicional
// operador ternario (condicion) ? true : false
// true seria instrucciones a seguir
// false otro comando a seguir
let year = +prompt(`how old are you?`) (year < 3) ? alert(`You are baby`) :
(year < 18) ? alert(`Hello young`) :
(year < 100) ? alert(`Congratulation you are an adult`) :
alert(`What an unusual age`);

//podriamos a cortar el codigo un poco de la siguiente manera
let edadDos = +prompt(`Cuantos años tienes?`)
let mensaje = (edadDos < 3) ? `Eres un bebe` :
(edadDos < 18) ? `Eres un joven` :
(edadDos < 100) ? `Eres un adulto` :
`Que edad tan inusual`;
alert(mensaje);

//uso no tradicional
let empresa = prompt(`Que empreso creo a JavaScript?`)
(empresa == "Netscape" || empresa == "nestcape") ?
alert(`Correcto`) : alert(`Incorrecto`);

//recordemso que el operador ternario devuelve el valor automaticamente