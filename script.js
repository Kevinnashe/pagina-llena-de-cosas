function saberEdad() {
    
    let nacimiento = document.getElementById("nacimiento").value 
    let texto = document.getElementById("texto")
    let edad = (nacimiento - 2020) * -1 +1
    let edad_tambien = (nacimiento - 2020) * -1 + 2

    if (nacimiento < 1920 || nacimiento >= 2020) {
        texto.innerHTML = "Ingrese un año de nacimiento entre 1920 y 2019"
    } else {
        texto.innerHTML = "Cargando datos"
        setTimeout(() => {texto.innerHTML = "Cargando datos."}, 600)
        setTimeout(() => {texto.innerHTML = "Cargando datos.."}, 1200)
        setTimeout(() => {texto.innerHTML = "Cargando datos..."}, 1800)
        setTimeout(() => {texto.innerHTML = "Cargando datos"}, 2400)
        setTimeout(() => {texto.innerHTML = "Cargando datos."}, 3000)
        setTimeout(() => {texto.innerHTML = "Cargando datos.."}, 3600)
        setTimeout(() => {texto.innerHTML = "Cargando datos..."}, 4200)
       setTimeout(() => {texto.innerHTML = "Usted tiene entre " + edad + " y " + edad_tambien + " años."}, 4800)
    }

}

function saberIMC() {
    let estatura = document.getElementById("estatura").value
    let peso = document.getElementById("peso").value
    let texto = document.getElementById("texto2")
    let imc = parseInt(peso / (estatura / 100)**2, 10)
    
    if (imc < 18.5) {
        texto.innerHTML = "Su Indice de Masa Corporal es de: " + imc + ", lo cual se encuentra dentro del rango de peso insuficiente"   
    }
    if (imc >= 18.5) {
        texto.innerHTML = "Su Indice de Masa Corporal es de: " + imc + ", lo cual se encuentra dentro del rango de peso normal o saludable"
    }
    if (imc >= 25) {
        texto.innerHTML = "Su Indice de Masa Corporal es de: " + imc + ", lo cual se encuentra dentro del rango de sobrepeso"
    }
    if (imc > 30) {
        texto.innerHTML = "Su Indice de Masa Corporal es de: " + imc + ", lo cual se encuentra dentro del rango de obesidad."        
    }
}

function conversorDolares() {
    let pesos = document.getElementById("pesos").value
    let dolares = parseFloat(pesos / 280)
    let texto = document.getElementById("texto3")

    texto.innerHTML = pesos + "$ARS en dolares son " + dolares + "$"
}

function conversorCentimetros() {
    let centimetros = document.getElementById("centimetros").value 
    let metros = centimetros / 100
    let texto = document.getElementById("texto4")

    texto.innerHTML = centimetros + " cms son " + metros + " mts"
}

function validarForm() {
    let texto = document.getElementById("texto5").value;
    let numero = document.getElementById("numero").value;
    
    if (numero < 10 || numero > 20) {
        alert("Ponga un numero entre 10 y 20...")
    } 

    if (texto.length < 10 || texto.length > 20) {
        alert("Tiene q ser un texto de 10 a 20 caracteres")
    }
}
