let altura = prompt('Digite qual sua altura ex: 170')
let peso = prompt('Digite qual seu peso ex: 60,5')

function calcular(){

    let pesoFinal = peso * peso; // solucao matematica 

    let calculo = pesoFinal / altura;
    alert(`Seu imc é ${calculo}`);
};




