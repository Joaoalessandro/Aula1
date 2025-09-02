function principal(readline) {
    readline.question('Escolha uma opção:\n1 - Verificar se número é par ou ímpar\n2 - Calcular salário reajustado\n3 - Verificar se número tem característica 3025\n4 - Verificar classe eleitoral\n5 - Calcular raízes de equação de 2º grau\n6 - Calcular tarifa bancária\n7 - Sair\n\nDigite sua opção: ', escolha => {
        switch (escolha) {
            case '1':
                verificarParImpar(readline);
                break;
            case '2':
                reajustaSalario(readline);
                break;
            case '3':
                verificar3025(readline);
                break;
            case '4':
                classificarEleitor(readline);
                break;
            case '5':
                calcularEquacaoSegundoGrau(readline);
                break;
            case '6':
                calcularTarifaBancaria(readline);
                break;
            case '7':
                info(readline);
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                principal(readline);
                break;
        }
    });
}


//____________________________________________________________________________________________________

function verificarParImpar(readline) {
    readline.question("Digite um número inteiro positivo: ", input => {
        const numero = parseInt(input);
        if (numero % 2 === 0) {
            console.log("Número é PAR");
        }
        if (numero % 2 !== 0) {
            console.log("Número é ÍMPAR");
        }
        principal(readline);
    });
}

function reajustaSalario(readline) {
    readline.question("Digite o salário atual (ex: 1412.00): ", input => {
        const salario = parseFloat(input);
        let novoSalario = 0;

        if (salario <= 1412.00) {
            novoSalario = salario * 1.5;
        }
        if (salario > 1412.00) {
            novoSalario = salario * 1.4;
        }

        console.log(`Salário reajustado: R$ ${novoSalario.toFixed(2)}`);
        principal(readline);
    });
}

function verificar3025(readline) {
    readline.question("Digite um número de 4 dígitos (ex: 3025): ", input => {
        const numero = parseInt(input);

        const parte1 = Math.floor(numero / 100);   
        const parte2 = numero % 100;     
        const soma = parte1 + parte2;
        const resultado = soma * soma;

        if (resultado === numero) {
            console.log("Número possui a característica 3025.");
        }
        if (resultado !== numero) {
            console.log("Número NÃO possui a característica 3025.");
        }
        principal(readline);
    });
}

function classificarEleitor(readline) {
    readline.question("Digite sua idade: ", input => {
        const idade = parseInt(input);

        if (idade < 16) {
            console.log("Classe Eleitoral: Não-eleitor");
        }
        if (idade >= 18 && idade <= 65) {
            console.log("Classe Eleitoral: Eleitor Obrigatório");
        }
        if (idade > 65 || (idade >= 16 && idade < 18)) {
            console.log("Classe Eleitoral: Eleitor Facultativo");
        }
        principal(readline);
    });
}

function calcularEquacaoSegundoGrau(readline) {
    readline.question("Digite o coeficiente A: ", a => {
        readline.question("Digite o coeficiente B: ", b => {
            readline.question("Digite o coeficiente C: ", c => {
                const A = parseFloat(a);
                const B = parseFloat(b);
                const C = parseFloat(c);

                const delta = B * B - 4 * A * C;

                if (delta < 0) {
                    console.log("RAÍZES IMAGINÁRIAS");
                }
                if (delta === 0) {
                    const raiz = -B / (2 * A);
                    console.log(`RAIZ ÚNICA: x = ${raiz.toFixed(2)}`);
                }
                if (delta > 0) {
                    const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
                    const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
                    console.log(`RAÍZES DISTINTAS: x1 = ${raiz1.toFixed(2)}, x2 = ${raiz2.toFixed(2)}`);
                }
                principal(readline);
            });
        });
    });
}

function calcularTarifaBancaria(readline) {
    readline.question("Digite seu nome: ", nome => {
        readline.question("Digite o número da conta: ", conta => {
            readline.question("Digite o saldo total semestral: ", saldoTotal => {
                const saldoMedio = parseFloat(saldoTotal) / 6;
                let tarifa = 0;

                if (saldoMedio < 1000) {
                    tarifa = 25.00;
                    console.log(`Cliente: ${nome} | Conta: ${conta} | Tarifa: R$ ${tarifa.toFixed(2)} (Básica)`);
                }
                if (saldoMedio >= 1000 && saldoMedio <= 2000) {
                    tarifa = 20.00;
                    console.log(`Cliente: ${nome} | Conta: ${conta} | Tarifa: R$ ${tarifa.toFixed(2)} (Prata)`);
                }
                if (saldoMedio > 2000 && saldoMedio <= 3500) {
                    tarifa = 13.00;
                    console.log(`Cliente: ${nome} | Conta: ${conta} | Tarifa: R$ ${tarifa.toFixed(2)} (Ouro)`);
                }
                if (saldoMedio > 3500) {
                    console.log(`Cliente: ${nome} | Conta: ${conta} | Tarifa: ISENTA (Prêmio)`);
                }
                principal(readline);
            });
        });
    });
}

//____________________________________________________________________________________________________

function info(readline) {
    console.log('\n\n\n\n\n\n\n\n\n\nAutor: João Alessandro da Silva Santos\n\n\n');
    readline.close();
}

//____________________________________________________________________________________________________

function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    principal(readline);
}

startApp();
