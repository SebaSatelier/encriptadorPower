const textarea = document.getElementById("textarea");

const botonEncriptar = document.getElementById("encriptar");

const botonDesencriptar = document.getElementById("desencriptar");

const arearespuesta = document.getElementById("devolucion");

const botonCopiar = document.getElementsByClassName("boton-copiar")[0];

const desEncriptado = (value) => {
    let textoDesencriptado = value.replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ufat","u")

    return textoDesencriptado;
}

const encriptado = (value) => {
    let textoEncriptado = value.replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat")

    return textoEncriptado;
}

const manejarTexto = (value, fn)=>{
    if(fn === "encriptar"){
        return encriptado(value);
    }
    return desEncriptado(value);
}
const devolucion = (value, fn) => {
    const nuevoValor = manejarTexto(value,fn);
    arearespuesta.value = nuevoValor
    textarea.value = "";
}

const copiar = (texto) => {
    navigator.clipboard.writeText(texto)
    .then(function() {
      console.log("Texto copiado al portapapeles: " + texto);
    })
    .catch(function(error) {
      console.error("Error al copiar el texto: " + error);
    });
}



botonEncriptar.addEventListener("click", () =>{
    const texto = textarea.value
    devolucion(texto, "encriptar")});


botonDesencriptar.addEventListener("click", () =>{
    const texto = textarea.value
    devolucion(texto)});


botonCopiar.addEventListener('click', () => {
    const texto = arearespuesta.value
    copiar(texto)
})    
    