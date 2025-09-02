function principal(readline) {
    readline.question('Escolha uma opção:\n1 - Calcular distância A e B\n2 - Calcular salário do empregado\n3 - Calcular rendimento\n4 - Calcular prestação em atraso\n5 - Sair\n\nDigite sua opção: ', escolha => {
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
                info();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                readline.close();
                break;
        }
    });
}

function calcularDistanciaAeB(readline) {
    readline.question('Digite o valor para x1: ', x1 => {
        readline.question('Digite o valor para x2: ', x2 => {
            readline.question('Digite o valor para y1: ', y1 => {
                readline.question('Digite o valor para y2: ', y2 => {
                    const resposta = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
                    console.log(`\nDistância igual a: ${resposta.toFixed(2)}`);
                    readline.close();
                    startApp();
                });
            });
        });
    });
}

function calculaSalario(readline) {
    readline.question('Digite o salário fixo: ', salarioFixo => {
        readline.question('Digite quantas tv\'s de LCD foram vendidas: ', tvsLcd => {
            readline.question('Digite quantas tv\'s de LED foram vendidas: ', tvsLed => {
                readline.question('Digite quantas tv\'s de Plasma foram vendidas: ', tvsPlasma => {
                    const salarioFinal = (50 * tvsLcd) + (60 * tvsLed) + (55 * tvsPlasma) + parseFloat(salarioFixo);
                    console.log(`O salário do colaborador será: R$ ${salarioFinal.toFixed(2)}`);
                    readline.close();
                    startApp();
                });
            });
        });
    });
}

function calcularRendimento(readline) {
    readline.question('Digite o valor constante de aplicação mensal: ', valorConstante => {
        readline.question('Digite a taxa em porcentagem: ', taxa => {
            readline.question('Digite a quantidade de meses que pretende aplicar: ', numeroMeses => {
                const valorAcumulado = valorConstante * ((Math.pow(1 + (taxa / 100), numeroMeses)) - 1) / (taxa / 100);
                console.log(`O valor acumulado será: R$ ${valorAcumulado.toFixed(2)}`);
                readline.close();
                startApp();
            });
        });
    });
}

function calcularPrestacaoAtrasada(readline) {
    readline.question('Digite a quantidade de dias em atraso: ', tempoAtraso => {
        readline.question('Digite o valor da prestação: ', valorPrestacao => {
            readline.question('Digite a taxa de juros: ', taxaJuros => {
                const valorComJuros = parseFloat(valorPrestacao) + (parseFloat(valorPrestacao) * (parseFloat(taxaJuros) / 100));
                console.log(`O valor da prestação atrasada será: R$ ${valorComJuros.toFixed(2)}`);
                readline.close();
                startApp();
            });
        });
    });
}

function info() {
    console.log('\nAutor: João Alessandro da Silva Santos\n');
    process.exit();
}

function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    principal(readline);
}

startApp();
