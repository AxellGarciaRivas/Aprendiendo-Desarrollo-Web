let pacientes = document.querySelectorAll(".paciente");

function automatizandoImc(listaPacientes) {

    for (let i = 0; i < listaPacientes.length; i++) {
        let paciente = listaPacientes[i];
        let pesoPaciente = paciente.querySelector(".info-peso").textContent;
        let alturaPaciente = paciente.querySelector(".info-altura").textContent;
        let imcPaciente = paciente.querySelector(".info-imc");
        let pesoValido = validarPeso(pesoPaciente);
        let alturaValida = validarAltura(alturaPaciente);

        if (pesoValido && alturaValida) {
            imcPaciente.textContent = calcularImc(pesoPaciente, alturaPaciente);
            
        } else if (!pesoValido) {
            imcPaciente.textContent = "Peso proporcionado invalido";
            paciente.classList.add("datos-incorrectos");

        } else {
            imcPaciente.textContent = "Altura proporcionado invalida";
            paciente.classList.add("datos-incorrectos");
        }
    }
}

function validarPeso(peso) {
    if (peso < 0 || peso >300) {
        return false;
    } else {
        return true;
    }
}

function validarAltura(altura) {
    if (altura < 0 || altura > 3) {
        return false;
    } else {
        return true;
    }
}

function calcularImc(peso, altura) {
    return (peso / altura ** 2).toFixed(1);
}

automatizandoImc(pacientes);