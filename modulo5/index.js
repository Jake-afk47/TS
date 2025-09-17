"use strict";
// void
function showVoid() {
    console.log("VOID");
}
showVoid();
// callback como argumento
function greeding(name) {
    return `Òla ${name}`;
}
function preGreeding(f, userName) {
    console.log("Preparando Função");
    const greed = f(userName);
    console.log(greed);
}
preGreeding(greeding, "Paulo");
preGreeding(greeding, "Erick");
preGreeding(greeding, "Gabriel");
// generic function
function segundoElemento(arr) {
    return arr[1];
}
console.log(segundoElemento([0, 1, 2, 3]));
console.log(segundoElemento(["a", "b", "c"]));
function murgeElements(obj, obj2) {
    return Object.assign(Object.assign({}, obj), obj2);
}
console.log(murgeElements({ name: "Paulo" }, { age: 19, job: "Programing" }));
// constraint 
function IgualNumber(a, b) {
    let igual;
    if (+a > +b) {
        igual = a;
    }
    else {
        igual = b;
    }
    return igual;
}
console.log(IgualNumber(1, 2));
console.log(IgualNumber("2", "7"));
// especificando tipos de argumento em uma generic
function mergeArrays(a, b) {
    return a.concat(b);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ["Paulo", "Erick", "Gabriel"]));
// parametros opcionais
function Name(name, segundName) {
    if (segundName) {
        return `Ola ${name} ${segundName}, tudo bem?`;
    }
    return `Ola ${name}, tudo bem?`;
}
console.log(Name("Paulo", "Vinicius"));
console.log(Name("Gabriel"));
