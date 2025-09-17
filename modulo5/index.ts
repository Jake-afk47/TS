// void

function showVoid(): void{
    console.log("VOID")
}

showVoid()

// callback como argumento

function greeding(name: string){
    return `Òla ${name}`
}


function preGreeding(f: (name: string) => string, userName: string){
    console.log("Preparando Função")

    const greed = f(userName)

    console.log(greed)
}

preGreeding(greeding, "Paulo")
preGreeding(greeding, "Erick")
preGreeding(greeding, "Gabriel")

// generic function

function segundoElemento<T>(arr: T[]): T{
    return arr[1]
}

console.log(segundoElemento([0,1,2,3]))
console.log(segundoElemento(["a", "b", "c"]))


function murgeElements<U, T>(obj: U, obj2: T){
    return{
        ...obj,
        ...obj2
    }
}

console.log(murgeElements({name: "Paulo"}, {age: 19, job: "Programing"}))

// constraint 

function IgualNumber<T extends number | string >(a: T, b: T): T{
    let igual: T

    if(+a > +b){
        igual = a
    }else{
        igual = b
    }

    return igual
}


console.log(IgualNumber(1,2))
console.log(IgualNumber("2", "7"))

// especificando tipos de argumento em uma generic

function mergeArrays<T>(a: T[], b: T[]){
    return a.concat(b)
}

console.log(mergeArrays([1,2,3], [4,5,6]))
console.log(mergeArrays<number | string>([1,2,3], ["Paulo", "Erick", "Gabriel"]))


// parametros opcionais

function Name(name: string, segundName?: string){

    if(segundName){
        return `Ola ${name} ${segundName}, tudo bem?`
    }

    return `Ola ${name}, tudo bem?`

}

console.log(Name("Paulo", "Vinicius"))
console.log(Name("Gabriel"))