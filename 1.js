// João Alessandro da Silva Santos
// Para Rodar execute node 1.js
function principal(readline) {
  readline.question('Escolha uma opção:\n1-Custo de Viagem; \n2-Calcular Delta; \n3-Calcular média final;\n4-Calcular volume da pirâmide;\n5-Sair;\n\n', escolha => {
    switch (escolha) {
      case '1':
        calcularCustoViagem(readline);
        break;
      case '2':
        calcularDelta(readline);
        break;
      case '3':
        calcularMediaFinal(readline);
        break;
      case '4':
        calcularVolumeDaPiramide(readline);
        break;
      case '5':
        info(readline);
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
        readline.close();
        break;
    }
  });
}

function calcularVolumeDaPiramide(readline) {
  let base = 0;
  let altura = 0;
  const valorPadrao = 1 / 3;
  let resultado = 0;

  readline.question("Insira a altura da pirâmide: ", inputAltura => {
    altura = parseFloat(inputAltura);

    readline.question("Insira a base da pirâmide: ", inputBase => {
      base = parseFloat(inputBase);

      if (base > 0 && altura > 0) {
        resultado = valorPadrao * altura * base;
        console.log(`O volume da pirâmide é: ${resultado}`);
      } else {
        console.log("Por favor, insira valores válidos para o cálculo.")
      }
    })
  })

}

function calcularCustoViagem(readline) {
  let distancia;
  const precoCombustivel = 6.44;
  const consumoVeiculo = 12.5;

  readline.question('Qual a distância total da viagem em km? ', inputDistancia => {
    distancia = parseFloat(inputDistancia);


    if (distancia > 0 && precoCombustivel > 0 && consumoVeiculo > 0) {
      const litrosConsumidos = distancia / consumoVeiculo;
      const custoTotal = litrosConsumidos * precoCombustivel;
      console.log(`O custo total da sua viagem será de R$ ${custoTotal.toFixed(2)}.`);
    } else {
      console.log('Por favor, insira valores válidos para o cálculo.');
    }
    readline.close();
    startApp();
  })
}

function calcularMediaFinal(readline) {
  let nota1 = 0;
  let nota2 = 0;
  let nota3 = 0;
  let notaFinal = 0;

  readline.question("Qual a primeira nota do aluno?", inputResposta1 => {
    nota1 = parseFloat(inputResposta1);

    readline.question("Qual a segunda nota do aluno?", inputResposta2 => {
      nota2 = parseFloat(inputResposta2);

      readline.question("Qual a terceira nota do aluno?", inputResposta3 => {
        nota3 = parseFloat(inputResposta3);

        if (nota1 > 0 && nota2 > 0 && nota3 > 0) {
          notaFinal = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 3;
          console.log(`Sua nota final é: ${notaFinal.toFixed(2)}`);
        } else {
          console.log('Por favor, insira valores válidos para o cálculo.');

        }

      })
    })
  })

}

function calcularDelta(readline) {
  let valorA = 0;
  let valorB = 0;
  let valorC = 0;
  let delta = 0;

  readline.question('Qual o valor de A? ', valorDeA => {
    valorA = parseFloat(valorDeA);

    readline.question('Qual o valor de B? ', valorDeB => {
      valorB = parseFloat(valorDeB);

      readline.question('Qual o valor de C? ', valorDeC => {
        valorC = parseFloat(valorDeC);

        if (valorA > 0 && valorB > 0 && valorC > 0) {
          delta = (Math.pow(valorB, 2)) - (4 * valorA * valorC)

          console.log(`o valor de delta é: ${delta}.`);
        } else {
          console.log('Por favor, insira valores válidos para o cálculo.');
        }
        readline.close();
        startApp();
      })
    })
  })
}

function info(readline) {

  console.log('\n\n\n\n\n\n\n\n\n\nAutor: João Alessandro da Silva Santos\n\n\n');
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

