//while mientras
let numero = 0;

while (numero <= 6) {
  numero++;

  document.write(numero + "<br>");
}
document.write("<br><br><br><br><br>");

//do while hazlo mientras
let numeroUno = 0;

do {
  numeroUno++;
  document.write(numeroUno + "<br>");
  if (numeroUno == 10) {
    break;
  }
} while (numeroUno <= 15);

document.write("Fin del buble <br><br><br><br>");

//for
for (let i = 0; i < 6; i++) {
  document.write(i + "<br>");
}
document.write("<br><br><br>");

//ejemplo de for declarando la variable afuera y estam misma podremos preguntar
//cual es el valor de j fuera del for
let j;
for (j = 0; j < 3; j++) {
  document.write(j + "<br>");
}
document.write("<br><br>");

let k = 6;
for (k; k >= 0; k--) {
  document.write(`${k}<br>`);
}
document.write(`<br><br>`);

for (let l = 0; l < 10; l++) {
  if (l == 5) {
    continue;
  }
  document.write(`${l}<br>`);
}
document.write(`<br><br>`);

//for in
//nos devuelve la posicion de animales el indice de como esta el array
//en este "animal" guarda el valor de la posicion del array ej: 0 hasta recorrer todo el array
let animales = ["Perro", "Gato", "Loro", "Vaca", "Toro"];

for (let animal in animales) {
  document.write(`${animales[animal]}<br>`);
  document.write(animales[animal] + "<br>"); //sin backtics
}
document.write(`<br><br>`);

//for of
//nos muestra el valor de los elementos
//en este "animal" se guarda el dato de cada elemento del array ej: Gato
for (let animal of animales) {
  document.write(`${animal}<br>`);
}
document.write(`<br><br>`);

//label pero no la utilizaremos
let array1 = ["Axell", "Lidieth"];
let array2 = ["Carlos", "Lupe", "Jaimy", array1, "Alexander"];

//analicemos
for (let array in array2) {
  //array recorrera el array2 al ser for in recorre posiciones o indice
  if (array == 3) {
    //si array llega al indice 3 se ejecutara el codigo dentro del if
    for (let array of array1) {
      //se declara la variable array y mostrara el array1 por ser for of lo mostrara de un solo
      document.write(`${array}<br>`); //imprime en pantalla el valor de array
    }
  } else {
    //si no es 3 ejecuta este codigo
    document.write(`${array2[array]}<br>`); //imprime en pantalla lo que esta en array2 en el indice "array"
  } //recordemos que el el "let array" declarado empezara en posicion 0
}
document.write(`<br><br>`);

//label ya la utilizaremos
let frutasAcidas = ["Limon", "Mandarina", "Naranja"];
let frutasDulces = ["Manzana", "Melon", "Banano", "Durazno"];
let frutasVariadas = [
  "Mamon",
  frutasAcidas,
  "Carambola",
  frutasDulces,
  "Kiwi",
  "Piña",
  "Fresa",
  "Guanabana",
  "Sandia",
];

//label nombrada
forfrutas: for (let indice in frutasVariadas) {
  if (indice == 1) {
    for (let indice of frutasAcidas) {
      document.write(` ${indice}<br>`);
    }
  } else if (indice == 3) {
    for (let indice of frutasDulces) {
      document.write(`${indice}<br>`);
    }
  } else if (indice == 5) {
    continue forfrutas;
    //saltaremos una vez el bucle completo del for principal en este caso piña
  } else if (indice == 7) {
    break forfrutas;
    //detendremos el bucle completo por la label del for
  } else {
    document.write(`${frutasVariadas[indice]}<br>`);
  }
}
