"use strict";
// Arrays
let numeros = [1, 2, 3, 4];
numeros.push(4);
console.log(numeros[0]);
let nomes = ["Paulo", "Erick", "Gabriel gay"];
nomes.push("Gustavo");
console.log(nomes[2]);
//Outra forma de fazer o arrey
const numerals = [500, 600];
numerals.push(700);
console.log(numerals[0]);
const palavras = ["Cafe", "Agua"];
console.log(palavras[0]);
//any
//Não devera ser usado pos quebra a ideia do TS, pos ele e uma tipagem fraca
const qualquer = [1, 2, 3, 'ola', {}, []];
console.log(qualquer);
//função
function subtração(a, b) {
    console.log(a - b);
}
subtração(20, 30);
//Retorno
function pão(nome) {
    return `O ${nome} é um GAY`;
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
const casa = { x: 40, y: 50 };
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
        return `Ola, ${primeiroNome} ${ultimoNome}, tudo bem?`;
    }
    return `Ola, ${primeiroNome}, tudo bem?`;
}
console.log(namefunc("Paulo", "Gervazio"));
console.log(namefunc("Paulo"));
// union type
function senha(item) {
    console.log(`comfirme sua senha: ${item}`);
}
senha("venom2070");
senha(2070);
// avançando em union type
function showAd(ad) {
    if (typeof ad == "boolean") {
        return "Você não foi aprovado";
    }
    return `Bem vindo ${ad}`;
}
console.log(showAd(false));
console.log(showAd("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(9);
showId(10921717841);
function showPoint(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
const coords = {
    x: 35,
    y: 14,
    z: 45
};
showPoint(coords);
const showPerson = { name: "Paulo", age: 19 };
console.log(showPerson);
// literal type
//ele e um negocio que da um unico valor para uma vaiavel, mas ela e muito usada junto com union type
let test;
test = "Testando";
console.log(test);
function direção(de) {
    console.log(`A direção escolhida é: ${de}`);
}
direção("reto");
// nom null assection operator
const p = document.getElementById("ola");
console.log(p.innerText);
