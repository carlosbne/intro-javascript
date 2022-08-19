// parâmetros de função

/* function soma(num1, num2){
    return num1 + num2;
} */

//console.log(soma(2, 2));

//parâmetros x argumentos

//ordem de parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade};`
}

//console.log(nomeIdade(40, 'João'));


function soma(num1, num2){
    return num1 + num2;
}


function mutiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(mutiplica(soma(2,3)));

