function principal(readline) {
    readline.question('Escolha uma opção:\n1 - Calcular Perda de Carga\n2 - Calcular Renda do Futebol\n3 - Calcular Custo da Lata\n4 - Trocar Valores A e B\n5 - Calcular Custo do Carro\n6 - Inverter Número\n7 - Sair\n\nDigite sua opção: ', escolha => {
        switch (escolha) {
            case '1':
                calcularPerdaDeCarga(readline);
                break;
            case '2':
                calcularRendaFutebol(readline);
                break;
            case '3':
                calcularCustoLata(readline);
                break;
            case '4':
                trocarValores(readline);
                break;
            case '5':
                calcularCustoCarro(readline);
                break;
            case '6':
                inverterNumero(readline);
                break;
            case '7':
                console.log("Saindo...");
                readline.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                principal(readline);
                break;
        }
    });
}

function calcularPerdaDeCarga(readline) {
    readline.question("Digite a vazão (Q): ", q => {
        readline.question("Digite o diâmetro do tubo (D): ", d => {
            readline.question("Digite o coeficiente de rugosidade (C): ", c => {
                const Q = parseFloat(q);
                const D = parseFloat(d);
                const C = parseFloat(c);

                const J = (Math.pow(Q, 1.85)) * 10.643 * (Math.pow(D, 4.87)) * (Math.pow(C, -1.85));
                console.log(`A perda de carga (J) é: ${J.toFixed(2)} unidades`);
                principal(readline);
            });
        });
    });
}

function calcularRendaFutebol(readline) {
    readline.question("Digite o público total do jogo: ", total => {
        const publico = parseInt(total);
        
        const popular = publico * 0.10;
        const geral = publico * 0.50;
        const arquibancada = publico * 0.30;
        const cadeiras = publico * 0.10;

        const rendaTotal = (popular * 5) + (geral * 10) + (arquibancada * 20) + (cadeiras * 40);

        console.log(`A renda total do jogo é: R$ ${rendaTotal.toFixed(2)}`);
        principal(readline);
    });
}

function calcularCustoLata(readline) {
    readline.question("Digite o raio da lata (em metros): ", raio => {
        readline.question("Digite a altura da lata (em metros): ", altura => {
            const r = parseFloat(raio);
            const h = parseFloat(altura);
            const pi = Math.PI;

            const areaBase = pi * Math.pow(r, 2) * 2;
            const areaLado = 2 * pi * r * h;
            const areaTotal = areaBase + areaLado;

            const custo = areaTotal * 155;

            console.log(`O custo da lata é: R$ ${custo.toFixed(2)}`);
            principal(readline);
        });
    });
}

function trocarValores(readline) {
    readline.question("Digite o valor de A: ", a => {
        readline.question("Digite o valor de B: ", b => {
            let temp = a;
            a = b;
            b = temp;
            console.log(`Valor de A após a troca: ${a}`);
            console.log(`Valor de B após a troca: ${b}`);
            principal(readline);
        });
    });
}

function calcularCustoCarro(readline) {
    readline.question("Digite o custo de fábrica do carro: ", custoFabrica => {
        const custo = parseFloat(custoFabrica);
        const distribuidor = custo * 0.12;
        const impostos = custo * 0.30;
        const custoConsumidor = custo + distribuidor + impostos;

        console.log(`O custo ao consumidor do carro é: R$ ${custoConsumidor.toFixed(2)}`);
        principal(readline);
    });
}

function inverterNumero(readline) {
    readline.question("Digite um número de 3 dígitos: ", num => {
        const numero = num.toString();

        if (numero.length === 3) {
            const invertido = numero.split('').reverse().join('');
            console.log(`Número lido: ${numero}`);
            console.log(`Número invertido: ${invertido}`);
        } else {
            console.log("Por favor, insira um número de 3 dígitos.");
        }
        principal(readline);
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
