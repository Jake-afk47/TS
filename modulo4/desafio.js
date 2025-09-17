"use strict";
function showAvaliation(a, b) {
    if (b === true) {
        console.log(`Sua avaliação: ${a}`);
    }
    else {
        console.log("obrigado por participar");
    }
}
showAvaliation(5, true);
showAvaliation(0);
