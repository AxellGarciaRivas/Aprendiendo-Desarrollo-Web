let frutas = ["banano", "manzana", "pera"]
document.write(frutas[0] + "<br>");    //para acceder a un elemento del arrar es entre corchete

// array asociativos

let pc1 = {
  nombre: "AxellPC",
  procesador: "Intel core I5",
  ram: "16GB",
  espacio: "1TB"
};

let nombre =  pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"]

frase = `El nombre de la PC es: <b>${nombre}</b><br>
         El procesador es un: <b>${procesador}</b><br>
         La memoria ram es de: <b>${ram}</b><br>
         El espacio en disco es de: <b>${espacio}</b>`;
document.write(frase)

console.log(frase)