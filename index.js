const textarea = document.getElementById("textarea");

const botonEncriptar = document.getElementById("encriptar");

const botonDesencriptar = document.getElementById("desencriptar");

const arearespuesta = document.getElementById("devolucion");

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
    arearespuesta.innerText = nuevoValor
    textarea.value = "";
}



botonEncriptar.addEventListener("click", () =>{
    const texto = textarea.value
    devolucion(texto, "encriptar")});


botonDesencriptar.addEventListener("click", () =>{
    const texto = textarea.value
    devolucion(texto)});
    