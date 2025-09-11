// Arrays
var numeros = [1, 2, 3, 4];
numeros.push(4);
console.log(numeros[0]);
var nomes = ["Paulo", "Erick", "Gabriel gay"];
nomes.push("Gustavo");
console.log(nomes[2]);
//Outra forma de fazer o array
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
    return "O ".concat(nome, " \u00E9 um GAY");
}
console.log(pão("Gabriel"));
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
// Prop opcionais
function showNumbers(a, b, c) {
    console.log("A: ", a);
    console.log("B: ", b);
    console.log("C: ", c);
}
showNumbers(1, 2);
// Validadando o argumento opcional
function namefunc(primeiroNome, ultimoNome) {
    if (ultimoNome !== undefined) {
        return "Ola, ".concat(primeiroNome, " ").concat(ultimoNome, ", tudo bem?");
    }
    return "Ola, ".concat(primeiroNome, ", tudo bem?");
}
console.log(namefunc("Paulo", "Gervazio"));
console.log(namefunc("Paulo"));
// union type
function senha(item) {
    console.log("comfirme sua senha: ".concat(item));
}
senha("venom2070");
senha(2070);
// avançando em union type
function showAd(ad) {
    if (typeof ad == "boolean") {
        return "Você não foi aprovado";
    }
    return "Bem vindo ".concat(ad);
}
console.log(showAd(false));
console.log(showAd("Admin"));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(9);
showId(10921717841);
function showPoint(obj) {
    console.log("X: ".concat(obj.x, ", Y: ").concat(obj.y, ", Z: ").concat(obj.z));
}
var coords = {
    x: 35,
    y: 14,
    z: 45
};
showPoint(coords);
var showPerson = { name: "Paulo", age: 19 };
console.log(showPerson);
// literal type
//ele e um negocio que da um unico valor para uma vaiavel, mas ela e muito usada junto com union type
var test;
test = "Testando";
console.log(test);
function direção(de) {
    console.log("A dire\u00E7\u00E3o escolhida \u00E9: ".concat(de));
}
direção("reto");
// nom null assection operator
var p = document.getElementById("ola");
console.log(p.innerText);
// bigint 
var a;
a = 500n;
console.log(a);
// symbol
var symbolA = Symbol("a");
var symbolb = Symbol("a");
console.log(symbolA == symbolb);
console.log(symbolA === symbolb);
