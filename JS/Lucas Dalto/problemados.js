let cantidadAlumnos = +prompt(`Cuantos alumnos son?`);
let listaAlumnos = [];

for (i = 0; i < cantidadAlumnos; i++) {
  listaAlumnos[i] = [prompt(`Cual es el nombre del estuciante ${i + 1}`), 0]; //se crea un array dentro del array [[Axell,0],[Lidieth,0]]
}

const controlAsistencia = (nombre, presencia) => { //tendra nombre y presencia 
  let = prompt(nombre)  //mostrara nombre en pantalla
  if (presencia == "p" || presencia == "P") { //si se cumple aumentara en uno la presencia
    listaAlumnos[i][1]++;
  }
}

for (i = 0; i < 30; i++) {
  for (alumno in listaAlumnos) { //alumno recorrera el indice de listaAlumnos
    controlAsistencia(listaAlumnos[alumno][0], alumno) //parametros ingresados por cada ciclo sera nombre 
  }
}

