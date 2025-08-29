// Arrays
var numeros = [1, 2, 3, 4];
numeros.push(4);
console.log(numeros[0]);
var nomes = ["Paulo", "Erick", "Gabriel gay"];
nomes.push("Paulo");
console.log(nomes[0]);
//Outra forma de fazer o arrey
var numerals = [500, 600];
numerals.push(700);
console.log(numerals[0]);
var palavras = ["Cafe", "Agua"];
console.log(palavras[0]);
//any
//Não devera ser usado pos quebra a ideia do TS, pos ele e uma tipagem fraca
var qualquer = [1, 2, 3, 'ola', {}, []];
console.log(qualquer);
//função
function subtração(a, b) {
    console.log(a - b);
}
subtração(20, 30);
//Retorno
function pão(nome) {
    return "Bem-vindo ".concat(nome);
}
console.log(pão("Paulo"));
//Anonimas
setTimeout(function () {
    //const cafe: string = 'pao e cafe'
    //console.log(cafe)
}, 2000);
//objeto
function parametro(cord) {
    console.log("Cordenadas do x" + cord.x);
    console.log("cordenada do y" + cord.y);
}
var casa = { x: 40, y: 50 };
parametro(casa);
