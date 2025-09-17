"use strict";
// type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("imposivel efetuar essa soma");
    }
}
sum("5", "4");
sum(15, 56);
sum("7", 5);
// checando valor de uma variavel
function ju(a, b) {
    if (b) {
        if (b === "sum") {
            const sum = a.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (b === "multiply") {
            const multiply = a.reduce((i, total) => i + total);
            console.log(multiply);
        }
    }
    else {
        console.log("coloque um operação");
    }
}
ju([1, 2, 3], "sum");
ju([5, 6, 7], "multiply");
ju([6, 7, 7, 8]);
// instenceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class superUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('jhon');
const poul = new superUser("poul");
function Greeding(user) {
    if (user instanceof superUser) {
        console.log(`Ola ${user.name}, oque vai ser hoje?`);
    }
    else if (user instanceof User) {
        console.log(`Ola ${user.name}`);
    }
}
Greeding(jhon);
Greeding(poul);
// operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const Toto = new Dog("Toto", "Pincher");
const Tininha = new Dog("Tininha");
function showDogDeTails(dog) {
    if ("breed" in dog) {
        console.log(`Ola, seu cachorro e da raça: ${dog.breed}`);
    }
    else {
        console.log("O cachorro e um SRD");
    }
}
showDogDeTails(Toto);
showDogDeTails(Tininha);
