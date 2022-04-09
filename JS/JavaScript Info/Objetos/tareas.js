//tarea 1
let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//tarea 2
let schedule = {};

function isEmpty(objeto) {
  for (let propiedades in objeto) {
    return console.log(false);
  }

  return console.log(true);
}

isEmpty(schedule);

schedule["8:30"] = "Hora de levantarse";

isEmpty(schedule);

let salarios = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = (agregarObjeto) => {
  let sum = 0;

  for (const empleados in agregarObjeto) {
    sum += agregarObjeto[empleados];
  }

  return console.log(sum);
};

sum(salarios);

let menu = {
  width: 200,
  height: 300,
  title: "Mi menu",
};

console.log(menu);

function multiplicarNumero(agregarObjeto2) {

  for (let propiedades in agregarObjeto2) {

    if ( typeof propiedades === "number") {

      agregarObjeto2[propiedades] *= 2

    }
  }
}

multiplicarNumero(menu);

console.log(menu);

//esta tarea no da el resultado correcto si el futuro lo puedes hacer haz una nueva para compararla

//ejemplo resduelto por el grupo

let conversion = (agregarObjeto3) => {
    for(let propiedades in agregarObjeto3) {

        if ( isNaN(agregarObjeto3) === false ) {
        
            agregarObjeto3[propiedades] = agregarObjeto3[propiedades] *= 2

        }
    }
}

// conversion(menu)
console.log(menu)