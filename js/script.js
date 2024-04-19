import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

// Variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// atribuindo uma função à um evento com arrow function
form.onsubmit = event => {
    event.preventDefault()
    const weight = inputWeight.value 
    const height = inputHeight.value
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }
    AlertError.close()
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage (result) {
    let message
    if(result < 16) {
         message = `Seu IMC é de ${result.toFixed(2)} você está com magreza grave!!`
    } else if(result >= 16 && result <= 16.9) {
         message = `Seu IMC é de ${result.toFixed(2)} você está com magreza moderada!!`
    } else if(result >= 17 && result <= 18.5) {
        message = `Seu IMC é de ${result.toFixed(2)} você está com magreza leve!!`
    } else if(result >= 18.6 && result <= 24.9) {
        message = `Seu IMC é de ${result.toFixed(2)} você está com o IMC ideal!!`
    } else if(result >= 25 && result <= 29.9) {
        message = `Seu IMC é de ${result.toFixed(2)} você está com sobrepeso!!`
    } else if(result >= 30 && result <= 34.9) {
        message = `Seu IMC é de ${result.toFixed(2)} você está com obesidade grau I !!`
    } else if(result >= 35 && result <= 39.9) {
        message = `Seu IMC é de ${result.toFixed(2)} você está com obesidade grau II ou severa.`
    } else if(result >= 40) {
        message = `Seu IMC é de ${result.toFixed(2)} você está com obesidade grau III ou mórbida.`
    }
    Modal.message.innerText = message
    Modal.open()
}
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

