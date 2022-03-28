//function one
function Suma(a, b) {
  let resultado = a + b;
  return resultado;
}

document.write(Suma(3, 6));
document.write(`<br><br>`);

//function two
const resta = function (a, b) {
  let resultado = a - b;
  return resultado;
};

document.write(resta(10, 5));
document.write(`<br><br>`);

//arrow function
const restaDos = (a, b) => {
  let resultado = a - b;
  return resultado;
};

document.write(restaDos(20, 5));

//Caracteristicas de un arrow function
/* 
1. Si no hay ningun parametro dejamos parentesis vacios ()
2. Si solo tenemos un parametros no necesitamos lo parentesis
3. Si solo es una linea de codigo la podemos declarar en la misma
   linea sin necesidada de usar las llaves de la funcion
4. Se retorna automaticamente
*/

//Ejemplo
let nombre = prompt(`Cual es tu nombre?`);
const saludar = (nombre) => alert(`Hola ${nombre}`);
saludar(nombre);
