// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }

// let user = makeUser();

// alert(user.ref.name); // ¿Cuál es el resultado?
//ninguno por que el this es indefenido por que no hace referencia a nada

let calculadora = {
    leer() {
        this.a = +prompt("a?")
        this.b = +prompt("b?")

    },
    suma() {
        return this.a + this.b;
    },
    multiplicar() {
        return this.a * this.b;
    }

}


calculadora.leer();
alert(calculadora.suma());
alert(calculadora.multiplicar())


let ladder1 = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // muestra el peldaño actual
        alert(this.step);
    }
};

ladder1.up();
ladder1.up();
ladder1.down();
ladder1.showStep(); // 1
ladder1.down();
ladder1.showStep(); // 0

//aqui este ejemplo vemos que tenemos que mencionar el objeto varias veces
//ya que llamamos los metodos para ejecutarlos
///////////////////////////////////////////////////////////////////



let ladder2 = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
};

ladder2.up().up().down().showStep().down().showStep(); // shows 1 then 0

//aqui llamamos al objeto y lo retornamos para poder ejecutar de manera encadenable
//sin la necesidad de mencionar el objeto varias veces como el caso anterior

ladder2
    .up()
    .up()
    .down()
    .showStep() // 1
    .down()
    .showStep(); // 0

//tambien es valido hacerlo de esta manera es mas legible para los desarrolladores