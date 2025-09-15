function showAvaliation(a: number| string, b?:boolean){
    if(b === true){
        console.log(`Sua avaliação: ${a}`)
    }else{
        console.log("obrigado por participar")
    }
}

showAvaliation(5, true)
showAvaliation(0)