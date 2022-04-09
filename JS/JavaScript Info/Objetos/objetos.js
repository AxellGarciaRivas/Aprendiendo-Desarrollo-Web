let contextura = prompt("Cual es tu contextura?", "delgada");
let persona = {
  name: "Axell",
  edad: 23,
  estatura: 172 + " cm",
  contextura,
  "estado civil": undefined,
};

console.log(persona.contextura);

console.log(persona.genero === undefined); //para saber si la propiedad genero existe

console.log("name" in persona); //para saber si la variable existe en ocasiones no funciona la de arriba y esta si

console.log(persona["estado civil"]); //resultado undefined ya que la propiedad existe pero esta indefenida
console.log(["estado civil"] in persona); //resultado verdadero por que la propiedad existe

//for in

for (let index in persona) {
  alert(index); //mostrara el recorrido de las propiedades del objeto

  alert(persona[index]) //mostrara el valor de la posicion del index
}