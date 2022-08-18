//
const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "seguroSenhA123#@";
const stringDeNumeros = "24341";

const citacao = 'Meu nome é ';
const meuNome = "Leonardo";



//contatenação (+)

console.log(citacao + meuNome);


//template string ou template literal

const template = `eu disse ${texto1}, ele disse ${texto2}!`;

console.log(template);


//converte -> toLowerCase() <- todos os caracteres para letras minusculas

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo);

//propriedade -> length <- para saber a quantidade de caracteres