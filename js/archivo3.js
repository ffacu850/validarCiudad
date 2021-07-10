const container = document.querySelector(".container")

const numeros = [3,3,1,6,7,6,3]
const buscarPosiciones = () => {
    let arrayMayorEdad = []
    let arrayMenorEdad = []
    const mayorEdad = 6
    const menorEdad = 3

    for(i = 0; i < numeros.length; i++){
        if(numeros[i] === menorEdad){
            arrayMenorEdad.push(i)
        }if(numeros[i] === mayorEdad){
            arrayMayorEdad.push(i)
        }
    }
    console.log(arrayMenorEdad)
    console.log(arrayMayorEdad)

    return {arrayMenorEdad, arrayMayorEdad}
}

const calcularPromedioEdades = () => {
    let promedio = 0
    for(numero of numeros){
        promedio += numero
    }
    promedio /= numeros.length
    return promedio = Number(promedio.toFixed(2))
}

const toCreateTitle = () => {
    const title = document.createElement("h2")
    container.appendChild(title)
    return {title}
}

const imprimirMenorEdad = () => { 
    const {arrayMenorEdad} = buscarPosiciones()
    arrayMenorEdad.forEach(posicion =>{
        const {title} = toCreateTitle()
        title.textContent = `El integrante ${posicion + 1} es menor de edad`
    })
}

const inprimirMayorEdad = () => {
    const {arrayMayorEdad} = buscarPosiciones()
    arrayMayorEdad.forEach(posicion =>{ 
        const {title} = toCreateTitle()
        title.textContent = `El integrante ${posicion + 1} es mayor de edad`
    })
}

const imprimirPromedioEdades = (promedio) => {
    const {title} = toCreateTitle()
    title.textContent = `El promedio de edades es de ${calcularPromedioEdades(promedio)}`
}

imprimirMenorEdad()
inprimirMayorEdad()
imprimirPromedioEdades()
