function principal(readline) {
    let salarioMinimo = 0;
    let kwConsumido = 0;
    readline.question("Digite o salário mínimo:", resposta1 => {
        salarioMinimo = parseFloat(resposta1);
        readline.question("Digite os quilowatt consumidos: ", resposta2 =>{
            kwConsumido = parseFloat(resposta2);
            console.log(`O valor do quilowatt é: R\$ ${(salarioMinimo/4).toFixed(2)}`);
    console.log(`O valor a ser pago pelos quilowatts consumidos é: R\$ ${((salarioMinimo/4)*kwConsumido).toFixed(2)}`);
    console.log(`O valor a ser pago pelos quilowatts consumidos com 25% de desconto é: R\$ ${(((salarioMinimo/4)*kwConsumido)-(((salarioMinimo/4)*kwConsumido) * 0.25)).toFixed(2)}`);
    console.log("FIM;");
    readline.close();
        })
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