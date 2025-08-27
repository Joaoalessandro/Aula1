function principal(readline) {
    readline.question('Escolha uma opção:\n1-Calcular distancia A e B; \n2-Calcular salário do empregado; \n3-Calcular rendimento;\n4-Calcular prestação em atraso;\n5-Sair;\n\n', escolha => {
        switch (escolha) {
            case '1':
                calcularDistanciaAeB(readline);
                break;
            case '2':
                calculaSalario(readline);
                break;
            case '3':
                calcularRendimento(readline);
                break;
            case '4':
                calcularPrestacaoAtrasada(readline);
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

function calcularPrestacaoAtrasada(readline) {
    let valorPrestacao = 0;
    let taxaJuros = 0;
    let tempoAtraso = 0;

    readline.question('Digite a quantidade de dias em atraso: ', resposta1 => {
        tempoAtraso = resposta1;
        readline.question('Digite o valor da prestação: ', resposta2 => {
            valorPrestacao = resposta2;
            readline.question('Digite a a taxa de juros: ', resposta3 => {
                taxaJuros = resposta3;
                console.log(`O valor da prestação atrasada será: ${(valorPrestacao + (valorPrestacao * (taxaJuros / 100)))}`);
                readline.close();
                startApp();
            })
        })
    })
}

function calcularDistanciaAeB(readline) {
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;
    let resposta = 0;

    readline.question('Digite o valor para x1: ', escolhax1 => {
        x1 = escolhax1;

        readline.question('Digite o valor de x2: ', escolhax2 => {
            x2 = escolhax2;

            readline.question('Digite o valor para y1: ', escolhay3 => {
                y1 = escolhay3;

                readline.question('Digite o valor para y2: ', escolhay4 => {
                    y2 = escolhay4;

                    resposta = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

                    console.log(`\n\nDistância igual a: ${resposta.toFixed(2)}`);
                    readline.close();
                    startApp();
                });
            });
        });
    });
}

function calcularRendimento(readline) {
    let valorConstante = 0;
    let taxa = 0;
    let numeroMeses = 0;
    let valorAcumulado = 0;

    readline.question('Digite o valor constante de aplicação mensal: ', resposta1 => {
        valorConstante = parseFloat(resposta1);
        readline.question('Digite a taxa em porcentagem: ', resposta2 => {
            taxa = parseFloat(resposta2);
            readline.question('Digite a quantidade de meses que pretende aplicar: ', resposta3 => {
                numeroMeses = resposta3;
                valorAcumulado = parseFloat(((Math.pow((1 + taxa), numeroMeses)) - 1) / taxa);
                console.log(`O valor acumulado será: ${valorAcumulado}`);
                readline.close();
                startApp();
            })
        })
    })
}

function calculaSalario(readline) {
    let tvsLcd = 0;
    let tvsLed = 0;
    let tvsPlasma = 0;
    let salarioFixo = 0
    let resposta = 0;

    readline.question('Digite o salário fixo: ', resposta1 => {
        salarioFixo = parseFloat(resposta1);
        readline.question('Digite quantas tv\'s de LCD foram vendidas: ', resposta2 => {
            tvsLcd = resposta2;
            readline.question('Digite  quantas tv\'s de LED foram vendidas: ', resposta3 => {
                tvsLed = resposta3;
                readline.question('Digite  quantas tv\'s de Plasma foram vendidas: ', resposta4 => {
                    tvsLed = resposta4;
                    resposta = (50 * tvsLcd) + (60 * tvsLed) + (55 * tvsPlasma) + salarioFixo;
                    console.log(`O salário do colaborador será: R\$${parseFloat(resposta)}`);
                    readline.close();
                    startApp();
                });
            });
        });
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