function principal(readline){
readline.question("Digite o valor de A: ", valorA => {
    readline.question("Digite o valor de B:", valorB =>{
        readline.question("Digite o valor de C:", valorC =>{
            calcularDelta(valorA, valorB, valorC, readline);
        })
    })
})
}

function calcularDelta(valorA, valorB, valorC, readline) {
    const delta = Math.pow(valorB, 2) - (4 * valorA * valorC);
    console.log(`O valor de delta é: ${delta.toFixed(2)}`);
    readline.close();
}

function startApp() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  principal(readline);
  
}

startApp();