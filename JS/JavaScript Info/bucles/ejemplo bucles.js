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

// let numero = +prompt("Ingresa hasta que numero buscaremos numeros primos");

// noEsPrimo:
// for (let i = 2; i < numero; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       continue noEsPrimo;
//     }
//   }
//   alert(i);
// }

let n = parseInt( prompt("Ingresa un numero") ) //pedimos un valor n

showPrimes(n) //el valor n lo metemos en el argumento de la funcion

function showPrimes(n) {  

  for (let i = 2; i < n; i++) { //si la condicion se cumple ejecuta el codigo
    if (!isPrime(i)) continue; //el valor de i se ingresara en el valor del argumento de la funcion isPrime, lo que devuelva la funcion se la contrario por el !

    alert(i); //si la condicion no se cumple hara esto
  }
}

function isPrime(n) { //n tiene el valor de i 
  for (let i = 2; i < n; i++) { //si la condicion se cumple ejecutara el codigo
    if (n % i == 0) return false; // si n con el resto de i da 0 ejecutara
  }

  return true;
}