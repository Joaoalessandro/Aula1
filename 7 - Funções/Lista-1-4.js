function principal(readline){
      readline.question("Qual altura? ", inputResposta1 => {
    readline.question("Qual base? ", inputResposta2 => {
     
        calcularNota(inputResposta1, inputResposta2, readline);
  
    })
})
}

function calcularNota(base, altura, readline) {
    const valorPadrao = 1 / 3;
       if (base > 0 && altura > 0) {
        const resultado = valorPadrao * altura * base;
        console.log(`O volume da pirâmide é: ${resultado.toFixed(2)}`);
      } else {
        console.log("Por favor, insira valores válidos para o cálculo.");
      }
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