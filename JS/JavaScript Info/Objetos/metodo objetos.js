let usuario = {
    name: "Axell",
    apellido: "Garcia Rivas",
    anios: 23,
    altura: 172 + " cm",

    //ejemplo como podriamos hacerlo
    // saluda: function() {
    //     console.log( alert(`Hola mi nombre es ${this.name}`) )
    // }

    //metodo abreviado
    saluda() {
        console.log( alert(`Hola mi nombre es ${this.name}`) );
    },
};

//this funciona dependiendo el contexto puede hacer referencia a varios objetos o
//simplemente a uno

//funciones dentro de objetos se llaman metodos