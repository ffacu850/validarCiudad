const form = document.querySelector(".form")

const nombre = document.querySelector("[name=nombre]")
const ciudad = document.querySelector("#opciones")
const button = document.querySelector("#button")
const seleccion = document.querySelector("#selecciona")

const botonDeEnviar = (e) =>{
    if(e.target === button){
        ciudadSeleccionada()
        form.reset()
    }
}

document.addEventListener("click", (e) =>{
    e.preventDefault()
    botonDeEnviar(e)
})


const ciudadSeleccionada = () => {
    if(!ciudad.value){
        console.log("El campo ciudad no puede estar vacio")
    }    
    // else{
        return true
    // }
    
}

