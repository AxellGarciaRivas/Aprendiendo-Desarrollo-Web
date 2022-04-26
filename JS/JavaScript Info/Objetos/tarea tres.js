// function Calculator() {
//     this.read = function() {
//         this.numero1 = +prompt('Cual es el primer valor?');
//         this.numero2 = +prompt('Cual es el segundo valor?')
//     };

//     this.sum = function() {
//         return this.numero1 + this.numero2
//     };

//     this.mul = function() {
//         return this.numero1 * this.numero2
//     };

// }

// let calculator = new Calculator();
// calculator.read()

// alert("Suma = " + calculator.sum())
// alert("Multiplicacion = " + calculator.mul())


// ======== tarea 2

function Calculadora() {
    this.leer = function() {
        this.number1 = +prompt('Ingresa el primer valor!');
        this.number2 = +prompt('Ingresa el segundo valor!');
    };

    this.suma = function() {
        return this.number1 + this.number2;
    };

    this.multiplicar = function() {
        return this.number1 * this.number2;
    };
}

let calculadora = new Calculadora;
calculadora.leer();

alert("La suma es: " + calculadora.suma());
alert("La multiplicacion es: " + calculadora.multiplicar())



// =============tarea 3


function Acumulador(valorInicial) {
    this.value = valorInicial;
    this.read = function() {
        this.value += +prompt('Ingresa un valor');
        //no es necesario el return por que automaticamente lo hace
        //cuando son funciones constructoras
    }

}

let acumularNumeros = new Acumulador(1);

acumularNumeros.read()
acumularNumeros.read()

alert(acumularNumeros.value);