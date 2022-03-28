/* let free = false;

const validarEdad = () => {
  let edad = prompt(`Cual es tu edad?`);
  if (edad >= 18) {
    let hora = prompt(`Cual es la hora?`);
    alert(`Puedes pasar parce. 😎`);
    if (hora >= 2 && hora < 7 && free == false) {
      alert(`Eres la primera persona despues de la 2 AM
    Felicidades!`);
      free = !false;
    } else {
      alert(`Podes pasar pero tenes que pagar.`);
    }
  } else {
    alert(`No puedes pasar carajilla. 😒`);
  }
};

validarEdad();
validarEdad();
validarEdad();
validarEdad();
  */

/*
[
  [Axell, 0],[Lidieth, 0],
  [Jaimy, 0], [Lupe, 0],
  [Carlos, 0]

]
// [nombre,presencia]

*/
//Control de asistencia
let cantidadEstudiantes = prompt(`Cuantos estudiantes son?`);
let listaAlumnos = [];

for (i = 0; i < cantidadEstudiantes; i++) {
  listaAlumnos[i] = [prompt(`Nombre del estudiante ${i + 1}`), 0]; //[Axell, Lidieth]
}

const asistencia = (nombre, presente) => {
  let presencia = prompt(nombre);
  if (presencia == "p" || presencia == "P") {
    listaAlumnos[presente][1]++;
  //lista de alumnos tiene en este momentos solo nombres [Axell, Lidieth]
  //al declarar asistencia creamos dos valores que seria nombre y asistencia ej: [[Axell, 0],[Lidieth, 0]]
  //[presencia] es igual a [Axell, asistencia] al seleccionar presencia declaramos que se modificara
  //al seleccionar el uno [1] dice que aumentaremos en uno la asistencia
  }
};

for (i = 0; i < 3; i++) {
  for (alumno in listaAlumnos) {
    //al ser for in alumno recorrera el indice de lista alumnos [[Axell, 0],[Lidieth, 0]]
    asistencia(listaAlumnos[alumno][0], alumno);
    //metera el paremetro nombre y luego alumno
    //[alumno] indice que recorrera empezando en cero,[0] es la posicion, indica que mostrara el nombre [[Axell, asistencia]]
    //[0] significa que mostrara exactamente el nombre en el array

  }
}

for (alumno in listaAlumnos) {
  let resultado = `${listaAlumnos[alumno][0]}<br>
  Presentes: ${listaAlumnos[alumno][1]}<br>
  Ausentes: ${3 - listaAlumnos[alumno[1]]}<br>
  `;
  if (3 - listaAlumnos[alumno][1] > 1) {
    resultado += "Reprobado por inasistencia <br>";
  } else {
    resultado += "Aprobado";
  }
  document.write(resultado);
}
