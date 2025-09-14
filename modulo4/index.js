// type guard
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            var sum_1 = a.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (b === "multiply") {
            var multiply = a.reduce(function (i, total) { return i + total; });
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
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var superUser = /** @class */ (function (_super) {
    __extends(superUser, _super);
    function superUser(name) {
        return _super.call(this, name) || this;
    }
    return superUser;
}(User));
var jhon = new User('jhon');
var poul = new superUser("poul");
function Greeding(user) {
    if (user instanceof superUser) {
        console.log("Ola ".concat(user.name, ", oque vai ser hoje?"));
    }
    else if (user instanceof User) {
        console.log("Ola ".concat(user.name));
    }
}
Greeding(jhon);
Greeding(poul);
// operador in
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var Toto = new Dog("Toto", "Pincher");
var Tininha = new Dog("Tininha");
function showDogDeTails(dog) {
    if ("breed" in dog) {
        console.log("Ola, seu cachorro e da ra\u00E7a: ".concat(dog.breed));
    }
    else {
        console.log("O cachorro e um SRD");
    }
}
showDogDeTails(Toto);
showDogDeTails(Tininha);
