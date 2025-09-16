function principal(readline) {
    let precoAntigo = 0;
    let precoNovo = 0;
    
    readline.question("Digite o Preço :", resposta1 => {
        precoAntigo = parseFloat(resposta1);
        if(precoAntigo <= 50){
          precoNovo = (precoAntigo + (precoAntigo * 0.06)).toFixed(2);
        }else{
          if(precoAntigo <= 100){
            precoNovo = (precoAntigo + (precoAntigo * 0.15)).toFixed(2);
          }else{
              precoNovo = (precoAntigo + (precoAntigo * 0.20)).toFixed(2);
          }
        }

        if(precoNovo < 90){
          console.log(`Preço Antigo R\$ ${precoAntigo}\nPreço Novo: R\$ ${precoNovo}\nClassificação: Barato`);
        }else{
          if(precoNovo <= 220){
            console.log(`Preço Antigo R\$ ${precoAntigo}\nPreço Novo: R\$ ${precoNovo}\nClassificação: Normal`);
          }else{
            if(precoNovo >= 300){
              console.log(`Preço Antigo R\$ ${precoAntigo}\nPreço Novo: R\$ ${precoNovo}\nClassificação: caro`);
            }else{
              console.log(`Preço Antigo R\$ ${precoAntigo}\nPreço Novo: R\$ ${precoNovo}\nClassificação: Muito caro`);
            }
          }
        }
        readline.close();
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