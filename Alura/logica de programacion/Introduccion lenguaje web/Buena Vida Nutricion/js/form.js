let boton = document.querySelector("#adicionar-paciente");

boton.addEventListener("click", function (event) {
    event.preventDefault();

    let form = document.querySelector("#form-adicionar")
    let paciente = creandoPaciente(form);
    let tablaPacientes = document.querySelector("#tabla-pacientes");
    
    tablaPacientes.appendChild(creandoTr(paciente));
    form.reset();
});

function creandoPaciente(formulario) {
    let nuevoPaciente = {
        nombre: formulario.name.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculoImc(formulario.peso.value, formulario.altura.value),
    }
    return nuevoPaciente;
}

function creandoTr(paciente) {
    let pacienteTr = document.createElement("tr")

    pacienteTr.appendChild(crearTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(crearTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(crearTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(crearTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(crearTd(calculoImc, "info-imc"));

    return pacienteTr
}

function crearTd(dato, clase) {
    let td = document.createElement("td");
    
    td.textContent = dato;
    td.classList.add(clase);
    
    return td;
}