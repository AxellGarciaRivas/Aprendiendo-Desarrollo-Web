//while

// let i = 3;
// while (i) {
//   alert(i--);
// }

// let j = 0;
// while (++j < 5) alert(j);

// let k = 0;
// while (k++ < 5) alert(k);

// for (let i = 2; i <= 10; i++) {
//   if (!(i % 2)) {
//     alert(i)
//   }
// }

// let i = 0;

// while (i < 3) {
//   alert(`Numero ${i}!`)
//   i++;
// }

// let numero = +prompt('Ingresa un numero', 0);

// while (numero <= 100 && numero) {
//   numero = +prompt('Ingresa un numero', 0);
// }

// let number;

// do {
//   number = +prompt("Ingresa un numero", 0);
// } while (number <= 100 && number);

// let n = +prompt('Ingresa un numero para buscar los numero primos');

// nextPrime:
// for (let i = 2; i <= n; i++) { // por cada i...

//   for (let j = 2; j < i; j++) { // buscar un divisor..
//     if (i % j == 0) continue nextPrime; // no es primo, ir al próximo i
//   }

//   alert( i ); // primo
// }

let numero = +prompt("Ingresa hasta que numero buscaremos numeros primos");

noEsPrimo:
for (let i = 2; i < numero; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      continue noEsPrimo;
    }
  }
  alert(i);
}
