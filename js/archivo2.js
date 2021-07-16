const form = document.querySelector(".form")
const nombre = document.querySelector("[name=nombre]")
const ciudad = document.querySelector("#ciudad")
const button = document.querySelector("#button")
const mensajeError = document.querySelector(".mensaje-error")
const mensajeDeExito = document.querySelector(".parrafo")

const validForm = {
    nombre: false,
    apellido: false,
    ciudad: false
}

document.addEventListener("DOMContentLoaded", (e) => {
    document.addEventListener("submit", (e) => {
        e.preventDefault()
        envioForm(e)
    })

    document.addEventListener("keyup", (e) => {
        tipoDeDatoIngresado(e)
        
    })
    document.addEventListener("change", (e) => {
        tocarSelect(e)
    })

})

const envioForm = (e) => {
    if(e.target === form){
        if(validForm.nombre && validForm.apellido && validForm.ciudad){
            mensajeError.classList.add("mensaje-error")
            mensajeDeExito.classList.remove("exito")
            form.reset()
            for(let key in validForm){
                validForm[key] = false
            }

            document.querySelectorAll("input").forEach(el => {
                el.classList.remove("correcto")
            })
            document.querySelectorAll("i").forEach(el =>{
                el.classList.remove("fa-check-circle")
            })
        }else{
            mensajeError.classList.remove("mensaje-error")
        }
        setTimeout(() => {
            mensajeDeExito.classList.add("exito")
        },2000)
    }
}

const tocarSelect = (e) =>{
    if(e.target === ciudad){
        validarCiudad("ciudad")
    }
}

const datos = {
    nombre: "nombre",
    apellido: "apellido",
    ciudad: "ciudad",
}
const tipoDeDatoIngresado = (e) => {
    const valores = Object.values(datos)
    valores.forEach(valor => {
    if(e.target.name === valor){
        validar(e.target, valor)
    }
    })
}

const validar = (input, dato) => {
        if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/i.test(input.value)){
            document.querySelector(`.form_${dato}`).classList.remove(`error-${dato}`)
            document.querySelector(`[name=${dato}]`).classList.add("incorrecto")
            document.querySelector(`[name=${dato}]`).classList.remove("correcto")
            document.querySelector(`.grupo-${dato} i`).classList.add("fa-times-circle")
            document.querySelector(`.grupo-${dato} i`).classList.remove("fa-check-circle")
            validForm[dato] = false
        }else{
            document.querySelector(`.form_${dato}`).classList.add(`error-${dato}`)
            document.querySelector(`[name=${dato}]`).classList.add("correcto")
            document.querySelector(`[name=${dato}]`).classList.remove("incorrecto")
            document.querySelector(`.grupo-${dato} i`).classList.remove("fa-times-circle")
            document.querySelector(`.grupo-${dato} i`).classList.add("fa-check-circle")
            validForm[dato] = true
        }

}


const validarCiudad = (dato) => {
    if(!ciudad.value){
        document.querySelector(`.form_${dato}`).classList.remove(`error-${dato}`)
        validForm[dato] = false
    }else{
        document.querySelector(`.form_${dato}`).classList.add(`error-${dato}`)
        validForm[dato] = true
    }
}



