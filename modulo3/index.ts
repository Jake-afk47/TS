// Arrays

let numeros: number[] = [1, 2, 3, 4]

numeros.push(4)

console.log(numeros[0])

let nomes: string[] = ["Paulo", "Erick", "Gabriel gay"]

nomes.push("Gustavo")

console.log(nomes[2])

//Outra forma de fazer o arrey

const numerals: Array<number> = [500, 600]

numerals.push(700)

console.log(numerals[0])

const palavras: Array<string> =["Cafe", "Agua"]

console.log(palavras[0])

//any
//Não devera ser usado pos quebra a ideia do TS, pos ele e uma tipagem fraca

const qualquer: any = [1,2,3, 'ola', {}, []]

console.log(qualquer)

//função

function subtração(a: number,b: number){
    console.log(a-b)
}

subtração(20,30)

//Retorno

function pão(nome: string): string{
    return `O ${nome} é um GAY`
}

console.log(pão("Gabriel"))



//Anonimas

setTimeout(function(){

    //const cafe: string = 'pao e cafe'

    //console.log(cafe)

},2000)

//objeto

function parametro(cord: {x:number, y:number}){
    console.log("Cordenadas do x" + cord.x)
    console.log("cordenada do y" + cord.y)
}

const casa = {x: 40, y: 50}

parametro(casa)


// Prop opcionais

function showNumbers(a: number, b: number, c?: number){
    console.log("A: ", a)
    console.log("B: ", b)
    console.log("C: ", c)
}
showNumbers(1,2)


// Validadando o argumento opcional

function namefunc(primeiroNome: string, ultimoNome?: string){
    if(ultimoNome !== undefined){
        return `Ola, ${primeiroNome} ${ultimoNome}, tudo bem?`
    }

    return `Ola, ${primeiroNome}, tudo bem?`
}

console.log(namefunc("Paulo", "Gervazio"))
console.log(namefunc("Paulo"))


// union type

function senha(item: string | number){
    console.log(`comfirme sua senha: ${item}`)
}

senha("venom2070")
senha(2070)



// avançando em union type

function showAd(ad: boolean | string){
    if(typeof ad == "boolean"){
        return "Você não foi aprovado"
    }
    return `Bem vindo ${ad}`
}

console.log(showAd(false))
console.log(showAd("Admin"))


// type alias

type ID = string | number 

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(9)
showId(10921717841)


// interface

interface Point {
    x: number,
    y: number,
    z: number
}

function showPoint(obj: Point){
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`)
}

const coords: Point = {
    x : 35,
    y : 14,
    z : 45
}


showPoint(coords)

// interface x type alias

//interface, e possivel fazer modificaçôes durante o codigo
interface Person {
    name: string
}

interface Person {
    age: number
}

const showPerson : Person  = {name : "Paulo", age : 19}


console.log(showPerson)

//como o type alias não e possivel fazer essa alteração durante o codigo


type person = {
    name: string
}


// literal type

//ele e um negocio que da um unico valor para uma vaiavel, mas ela e muito usada junto com union type

let test : "Testando"

test = "Testando"

console.log(test)


function direção (de :"esquerda" | "direita" | "reto"){
    console.log(`A direção escolhida é: ${de}`)
}

direção("reto")

// nom null assection operator

const p = document.getElementById("ola")

console.log(p!.innerText)