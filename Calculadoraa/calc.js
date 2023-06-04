const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
let resultado = document.querySelector('#resultado');



// let resultado = document.getElementById('#resultado'){
//   resultado.style.color = 'red'}


const calcIMC = () => {
    if (altura.value && peso.value) {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
        let classification = '';
        if (imc <= 18.5 ) {
            classification = ' Você está abaixo do peso'
         } else if (imc >= 18.5 && imc <= 24.9) {
                classification = 'Você está saudável'
        } else if (imc >= 25 && imc <= 29.9) {
            classification = 'Você está com sobrepeso'
        } else if (imc >= 30 && imc <= 34.9) {
            classification = ' Você está com obesidade nível 1'
        } else if (imc >= 35 && imc <= 39.9) {
            classification = 'Você está com obesidade nível 2'
        } else if (imc >= 40) {
            classification = 'Você está com obesidade nível 3'
        }
        resultado.innerHTML = `IMC:${imc} (${classification})`
    } else {
        resultado.innerHTML = 'PREENCHA OS CAMPOS'
    }
    
};
