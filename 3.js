function principal(readline) {
    readline.question('Escolha uma opção:\n1-Calcular perda de cargas; \n2-Calcular salário do empregado; \n3-Calcula Renda Total futebol ;\n4-sair ;\n5-Sair;\n6-Calcular Custo do carro\n7-Inverter Número\n\n:', escolha => {
        switch (escolha) {
            case '1':
                calcularPerdaCarga(readline);
                break;
            case '2':
                calculaSalario(readline);
                break;
            case '3':
                calcularRendaTotal(readline);
                break;
            case '5' || '4':
                info(readline);
                break;
            case '6':
                calcularCustoCarro(readline);
                break;
            case '7':
                inverterNumero(readline);
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                readline.close();
                break;
        }
    });
}

function calcularPerdaCarga(readline) {
    let vazao = 0;
    let diametroTubo = 0;
    let coeficiente = 0;

    readline.question('Digite a vazão: ', resposta1 => {
        vazao = resposta1;
        readline.question('Digite o diametro do tubo: ', resposta2 => {
            diametroTubo = resposta2;
            readline.question('Digite o coeficiente de rugosidade: ', resposta3 => {
                coeficiente = resposta3;
                readline.question('Digite a a taxa de juros: ', resposta3 => {
                    taxaJuros = resposta3;
                    console.log(`A perda de carga será: ${(Math.pow((vazao), 1.85) * 10643 * Math.pow(diametroTubo, 4.87 * Math.pow(coeficiente, -1.85)))}`);
                    readline.close();
                    startApp();
                })
            })
        })
    })
}

function calcularRendaTotal(readline) {
    let popular = 0;
    let geral = 0;
    let arquibancada = 0;
    let cadeiras = 0;
    let resposta = 0;

    readline.question('Digite a quantidade de popular: ', escolha1 => {
        popular = escolha1;

        readline.question('Digite a quantidade de geral: ', escolha2 => {
            geral = escolha2;

            readline.question('Digite a quantidade de arquibancada: ', escolha3 => {
                arquibancada = escolha3;

                readline.question('Digite o valor para y2: ', escolhay4 => {
                    cadeiras = escolhay4;

                    resposta = parseFloat((10 * geral) + (5 * popular) + (20 * arquibancada) + (40 * cadeiras));

                    console.log(`\n\nRenda total: ${resposta.toFixed(2)}`);
                    readline.close();
                    startApp();
                });
            });
        });
    });
}

function calcularCusto(readline) {
    let raio = 0;
    let altura = 0;
    let resposta = 0;


    readline.question('Digite o raio em metros: ', resposta1 => {
        raio = parseFloat(resposta1);
        readline.question('Digite a altura em metros: ', resposta2 => {
            altura = parseFloat(resposta2);
            resposta = parseFloat((Math.PI * (Math.pow(raio)) * 2) + (2 * Math.PI * raio * altura));

            console.log(`O custo será: R\$${parseFloat(valorAcumulado * 155)}`);
            readline.close();
            startApp();

        })
    })
}

function calculaSalario(readline) {
    let valorA = 0;
    let valorB = 0;
    let aux = 0;

    readline.question('Digite o valor de A: ', resposta1 => {
        valorA = parseFloat(resposta1);
        readline.question('Digite o valor de B: ', resposta2 => {
            valorB = resposta2;
            aux = valorB;
            valorB = valorA;
            valorA = aux;
            console.log(`ValorA: ${valorA}, ValorB: ${valorB}`);
        });
    });
}

function calcularCustoCarro(readline) {
    const percentualDistribuidor = 0.12;
    const impostos = 0.30;

    readline.question('Digite o custo de fábrica do carro: R$ ', custoFabricaStr => {
        const custoFabrica = parseFloat(custoFabricaStr);

        if (isNaN(custoFabrica)) {
            console.log("Valor inválido. Por favor, digite um número.");
        } else {
            const custoDistribuidor = custoFabrica * percentualDistribuidor;
            const custoImpostos = custoFabrica * impostos;
            const custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos;

            console.log(`\nO custo final ao consumidor é: R$ ${custoConsumidor.toFixed(2)}`);
        }

        readline.close();
        startApp();
    });
}

function inverterNumero(readline) {
    readline.question('Digite um número de 3 dígitos: ', numeroStr => {
        if (numeroStr.length === 3 && !isNaN(parseInt(numeroStr))) {
            const numeroInvertido = numeroStr.split('').reverse().join('');
            
            console.log(`\nNúmero lido: ${numeroStr}`);
            console.log(`Número invertido: ${numeroInvertido}`);
        } else {
            console.log("\nEntrada inválida. Por favor, digite um número com exatamente 3 dígitos.");
        }
        readline.close();
        startApp();
    });
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
