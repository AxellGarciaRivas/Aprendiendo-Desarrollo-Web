let boton = document.querySelector("#adicionar-paciente");

boton.addEventListener("click", (e) => {
    e.preventDefault();

    let formulario = document.querySelector("#form-adicionar");
    let paciente = creandoPaciente(formulario);
    let erroresValidacionPaciente = validarPaciente(paciente);

    if (erroresValidacionPaciente.length > 0) {
        exhibirErroresPantalla(erroresValidacionPaciente);
        return;
    }

    adicionarPacienteEnLaTabla(paciente);
    formulario.reset();
    let ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
});

function adicionarPacienteEnLaTabla(paciente) {
    let tablaPaciente = document.querySelector("#tabla-pacientes");
    tablaPaciente.appendChild(crearPacienteTr(paciente));
}

function creandoPaciente(formulario) {
    let nuevoPaciente = {
        nombre: formulario.nombre.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularImc(formulario.peso.value, formulario.altura.value),
    }
    return nuevoPaciente;
}

function crearPacienteTr(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.appendChild(crearTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(crearTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(crearTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(crearTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(crearTd(paciente.imc, "info-imc"));
    return pacienteTr;
}

function crearTd(dato, clase) {
    let td = document.createElement("td")
    td.textContent = dato;
    td.classList.add(clase);
    return td;
}

function validarPaciente(paciente) {
    let resultadoErrores = []
    if (paciente.nombre.length === 0) {
        resultadoErrores.push("No puedes dejar el nombre del paciente en blano");
    }

    if (paciente.peso.length === 0) {
        resultadoErrores.push("No puedes dejar el peso del paciente en blanco");
    }

    if (paciente.altura.length === 0) {
        resultadoErrores.push("No puedes dejar la altura del paciente en blaco");
    }

    if (paciente.gordura.length === 0) {
        resultadoErrores.push("No puedes deajr el % de gordura del paciente en blanco");
    }

    if (!validarPeso(paciente.peso)) {
        resultadoErrores.push("El peso del paciente es invalido");
    }

    if (!validarAltura(paciente.altura)) {
        resultadoErrores.push("La altura del paciente es invalida");
    }
    return resultadoErrores;
}

function exhibirErroresPantalla(erroresMostrar) {
    let ul = document.querySelector("#mensajes-errores");
    erroresMostrar.forEach(errores => {
        let li = document.createElement("li");
        cuentaErrores.textContent = errores;
        ul.appendChild(li);
    });
    return ul;
}