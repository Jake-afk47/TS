// void
function showVoid() {
    console.log("VOID");
}
showVoid();
// callback como argumento
function greeding(name) {
    return "\u00D2la ".concat(name);
}
function preGreeding(f, userName) {
    console.log("Preparando Função");
    var greed = f(userName);
    console.log(greed);
}
preGreeding(greeding, "Paulo");
preGreeding(greeding, "Erick");
preGreeding(greeding, "Gabriel");
