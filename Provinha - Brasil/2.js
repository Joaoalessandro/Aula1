function principal(readline) {
    let aX1 = 0;
    let aY1 = 0;
    let bX1 = 0;
    let bY1 = 0;
    readline.question("Digite Ax1:", resposta1 => {
        aX1 = parseInt(resposta1);
        readline.question("Digite Ay1: ", resposta2 =>{
            aY1 = parseInt(resposta2);
              readline.question("Digite Ax1:", resposta1 => {
                bX1 = parseInt(resposta1);
                readline.question("Digite Ay1: ", resposta2 =>{
                    bY1 = parseInt(resposta2);
                    console.log(`A distância entre o ponto A e ponto B é: ${(Math.sqrt(Math.pow((bX1 - aX1), 2) + Math.pow((bY1 - aY1), 2), 2)).toFixed(2)}`);
                    if(aX1 > 0 && aY1 > 0){
                      console.log("Ponto A no quadrante 1.");
                    }
                    if(aX1 < 0 && aY1 < 0){
                      console.log("Ponto A no quadrante 3.");
                    }
                    if(aX1 > 0 && aY1 < 0){
                      console.log("Ponto A no quadrante 4.");
                    }
                    if(aX1 < 0 && aY1 > 0){
                      console.log("Ponto A no quadrante 2.");
                    }
                    if(aX1 == 0 && aY1 == 0){
                      console.log("Ponto A está sobre o ponto central.")
                    }
                    if(aX1 == 0 && aY1 != 0){
                      console.log("Ponto A está sobre o eixo Y.")
                    }
                    if(aY1 == 0 && aX1 != 0){
                      console.log("Ponto A está sobre o eixo X.")
                    }
                    console.log("FIM;")
                    readline.close();
                });
            });
        });
    });
}

function startApp() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  principal(readline);
}
startApp();