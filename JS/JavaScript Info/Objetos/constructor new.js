//funcion constructora
function User(name) {
    this.name = name;
    this.admin = false;
}


//la function constructora debe llamarse con new siempre
let usuario = new User("Axell");




//testeo para verificar si se llamo con el constructor
function Usurio() {
    alert(new.target)
}

//sin el new dara undefined
Usuario()

//dara la funcion
new Usurio()

//podemos hacer que no importe como la llamemos modificando un poco el codigo
function Usuario1(name) {

    if (!new.target) {
        return new Usuario1(name)
    }

    this.name = name;
}

//al no poner new retornara escribiendose correctamente
let Axell = Usuario1('Axell');

//El valor sera el correcto
alert(Axell.name)





//tarea de constructor que no entendi pero tratamos de analizar
function A() {

}

function B() {

}

let a = new A;
let b = new B;

alert(a == b); //true?

//ejemplo de que ambos constructores pueden ser iguales

let obj = {};

function A1() {
    return obj;
}

function B1() {
    return obj;
}

alert(new A1 == new B1)  //true