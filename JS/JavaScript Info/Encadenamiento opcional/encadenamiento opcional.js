let usuario = {
    nombre: "Axell",
    anios: 23,
    // address: null, no existe!! al ser llamada
    genero: "Masculino",

}

alert(usuario?.address)
//el encadenamiento opcional es para verificar si el lado izquierdo existe si no existe sera undefined
//aun asi tenga mas lineas de codigo a ejecutar en la direccion dada

/* 
OBJETOS
obj?.prop – devuelve obj.prop si obj existe, si no, undefined.


ARRAY
obj?.[prop] – devuelve obj[prop] si obj existe, si no, undefined.


FUNCTION
obj.method?.() – llama a obj.method() si obj.method existe, si no devuelve undefined. 
*/