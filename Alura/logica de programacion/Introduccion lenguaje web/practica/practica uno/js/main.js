let pacientes = document.querySelectorAll(".paciente");
let pesoInvalido = false;

function automatizandoImc(listaPacientes) {

    for (let i = 0; i < listaPacientes.length; i++) {
        let paciente = listaPacientes[i];
        let pesoPaciente = paciente.querySelector(".info-peso").textContent;
        let alturaPaciente = paciente.querySelector(".info-altura").textContent;
        let imcPaciente = paciente.querySelector(".info-imc");

        let datosValidos = validandoDatos(pesoPaciente, alturaPaciente);

        if (datosValidos) {
            imcPaciente.textContent = calculoImc(pesoPaciente, alturaPaciente);

        } else if (pesoInvalido) {
            imcPaciente.textContent = "Peso incorrecto";
            paciente.classList.add("paciente-incorrecto");

        } else {
            imcPaciente.textContent = "Altura incorrecta";
            paciente.classList.add("paciente-incorrecto");
        }
    }
}

function validandoDatos(peso, altura) {

    if ((peso <= 0) || (peso > 300)) {
        pesoInvalido = true;
        return false;

    } else if ((altura <= 0) || (altura > 3)) {
        return false;

    } else {
        return true;
    }
}

function calculoImc(peso, altura) {
    return (peso / altura ** 2).toFixed(1);
}

automatizandoImc(pacientes);