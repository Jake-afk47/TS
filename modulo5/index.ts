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