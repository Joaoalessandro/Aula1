function principal(readline) {
    readline.question(
        '\nEscolha uma opção:\n' +
        '1 - Verificar se é quadrado perfeito\n' +
        '2 - Calcular preço final do carro\n' +
        '3 - Verificar tipo de triângulo\n' +
        '4 - Conversão de moeda\n' +
        '5 - Condição de pagamento\n' +
        '6 - Posto de combustível\n' +
        '7 - Sair\n\n: ',
        escolha => {
            switch (escolha) {
                case '1':
                    quadradoPerfeito(readline);
                    break;
                case '2':
                    precoFinalCarro(readline);
                    break;
                case '3':
                    tipoTriangulo(readline);
                    break;
                case '4':
                    converterMoeda(readline);
                    break;
                case '5':
                    condicaoPagamento(readline);
                    break;
                case '6':
                    combustivel(readline);
                    break;
                case '7':
                    sair(readline);
                    break;
                default:
                    console.log('Opção inválida.');
                    principal(readline);
                    break;
            }
        }
    );
}

function quadradoPerfeito(readline) {
    readline.question('Digite um número inteiro positivo: ', numero => {
        const raiz = Math.sqrt(Number(numero));
        if (raiz === Math.floor(raiz)) {
            console.log(`✅ ${numero} é um quadrado perfeito.`);
        } else {
            console.log(`❌ ${numero} NÃO é um quadrado perfeito.`);
        }
        principal(readline);
    });
}

function precoFinalCarro(readline) {
    readline.question('Digite o preço de fábrica: ', precoStr => {
        let preco = Number(precoStr);
        readline.question('Ar condicionado (S/N)? ', ar => {
            if (ar.toUpperCase() === 'S') preco += 1750;
            readline.question('Pintura metálica (S/N)? ', pintura => {
                if (pintura.toUpperCase() === 'S') preco += 800;
                readline.question('Vidro elétrico (S/N)? ', vidro => {
                    if (vidro.toUpperCase() === 'S') preco += 1200;
                    readline.question('Direção hidráulica (S/N)? ', direcao => {
                        if (direcao.toUpperCase() === 'S') preco += 2000;
                        console.log(`💰 Preço final do carro: R$ ${preco.toFixed(2)}`);
                        principal(readline);
                    });
                });
            });
        });
    });
}

function tipoTriangulo(readline) {
    readline.question('Digite valor A: ', aStr => {
        readline.question('Digite valor B: ', bStr => {
            readline.question('Digite valor C: ', cStr => {
                const a = Number(aStr), b = Number(bStr), c = Number(cStr);
                if (a + b > c && a + c > b && b + c > a) {
                    if (a === b && b === c) {
                        console.log('🔺 Triângulo equilátero');
                    } else if (a === b || b === c || a === c) {
                        console.log('🔺 Triângulo isósceles');
                    } else {
                        console.log('🔺 Triângulo escaleno');
                    }
                } else {
                    console.log('❌ Os valores NÃO formam um triângulo');
                }
                principal(readline);
            });
        });
    });
}

function converterMoeda(readline) {
    readline.question('Digite o valor em Reais (R$): ', valorStr => {
        const valor = Number(valorStr);
        readline.question('Escolha a moeda: 1-Euro, 2-Libra, 3-Dólar: ', opcao => {
            let convertido = 0;
            if (opcao === '1') convertido = valor / 5.418;
            else if (opcao === '2') convertido = valor / 6.336;
            else if (opcao === '3') convertido = valor / 5.189;
            else {
                console.log('Opção inválida');
                return principal(readline);
            }
            console.log(`💱 Valor convertido: ${convertido.toFixed(2)}`);
            principal(readline);
        });
    });
}

function condicaoPagamento(readline) {
    readline.question('Digite o valor do produto: ', valorStr => {
        const valor = Number(valorStr);
        readline.question('Escolha a forma de pagamento (1-4): ', opcao => {
            let final = valor;
            if (opcao === '1') final = valor * 0.90;
            else if (opcao === '2') final = valor * 0.95;
            else if (opcao === '3') final = valor;
            else if (opcao === '4') final = valor * 1.10;
            else {
                console.log('Código inválido');
                return principal(readline);
            }
            console.log(`💸 Valor final a pagar: R$ ${final.toFixed(2)}`);
            principal(readline);
        });
    });
}

function combustivel(readline) {
    readline.question('Escolha o combustível (1-Álcool, 2-Diesel, 3-Gasolina): ', tipo => {
        readline.question('Quantos litros? ', litrosStr => {
            const litros = Number(litrosStr);
            let preco = 0;
            if (tipo === '1') preco = 4.805;
            else if (tipo === '2') preco = 5.953;
            else if (tipo === '3') preco = 6.565;
            else {
                console.log('Tipo inválido');
                return principal(readline);
            }
            const total = litros * preco;
            console.log(`⛽ Valor total: R$ ${total.toFixed(2)}`);
            principal(readline);
        });
    });
}

function sair(readline) {
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
