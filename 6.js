//asdf asdf asdf asdf asdf asdf asdf asdf asdf as
// asdf asdfasdfasdf asdf asdfasf asf asf as ffas
//a sdasd ffasdf asdff sdff assdf sd
// asdfa sdfasd fasdf sdfasf 
function calcularPrecoMoedas() {
    let euro = 4.617;
    let libraEsterlina = 6.816;
    let dolar = 5.071;

    let valorAConverter = 1;


    console.log(`Atividade 1:\n\nO valor de R\$${valorAConverter} em:\nEuro: ${euro * valorAConverter}\nlibra esterlina: ${libraEsterlina * valorAConverter}\ndolar: ${dolar * libraEsterlina}`);
}

function calcularProduto() {
    let valorProduto = 100;
    let escolha = 1;
    let resposta = 0;

    if (escolha == 1) {
        resposta = valorProduto - (valorProduto * 0.1);
    }
    if (escolha == 2) {
        resposta = valorProduto - (valorProduto * 0.05);
    }
    if (escolha == 3) {
        resposta = valorProduto;
    }
    if (escolha == 4) {
        resposta = valorProduto + (valorProduto * 0.1);
    }
    console.log(`O preço total é R\$${resposta}`);
}

function realizarOperacao() {
    let operacao = '+'
    let resposta = 0;
    let numero1 = 1;
    let numero2 = 1;

    if (operacao == '+') {
        resposta = numero1+numero2;
    }
    if (operacao == '-') {
        resposta = numero1-numero2;

    }
    if (operacao == '*') {
        resposta = numero1*numero2;

    }
    if (operacao == '/') {
        resposta = numero1/numero2;

    }
}

function calcularCombustivel() {
    let tipoCombustivel = 1; 
    let litros = 10;
    let preco = 0;

    if (tipoCombustivel == 1) {
        preco = 4.805;
    } else if (tipoCombustivel == 2) {
        preco = 5.953;
    } else if (tipoCombustivel == 3) {
        preco = 6.565;
    }

    let total = litros * preco;
    console.log(`Valor a pagar: R\$${total.toFixed(2)}`);
}


function calcularPulverizacao() {
    let nomeFazendeiro = "João";
    let tipoPulverizacao = 4;
    let area = 400;

    let precoPorAcre = 0;

    if (tipoPulverizacao == 1) {
        precoPorAcre = 50;
    } else if (tipoPulverizacao == 2) {
        precoPorAcre = 100;
    } else if (tipoPulverizacao == 3) {
        precoPorAcre = 150;
    } else if (tipoPulverizacao == 4) {
        precoPorAcre = 250;
    }

    let custoBruto = area * precoPorAcre;
    let desconto = 0;

    if (area > 300) {
        desconto += custoBruto * 0.05;
    }

    if (custoBruto > 10750) {
        let excedente = custoBruto - 10750;
        desconto += excedente * 0.10;
    }

    let custoFinal = custoBruto - desconto;

    console.log(`Fazendeiro: ${nomeFazendeiro}`);
    console.log(`Valor a ser pago: R\$${custoFinal.toFixed(2)}`);
}


function calcularMedia() {
    let nota1 = 8;
    let nota2 = 7;
    let nota3 = 9;
    let tipoMedia = 2; 
    let media = 0;

    if (tipoMedia == 1) {
        media = (nota1 + nota2 + nota3) / 3;
    } else if (tipoMedia == 2) {
        media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10;
    } else if (tipoMedia == 3) {
        media = 3 / ((1 / nota1) + (1 / nota2) + (1 / nota3));
    } else if (tipoMedia == 4) {
        media = Math.cbrt(nota1 * nota2 * nota3);
    } else if (tipoMedia == 5) {
        media = Math.sqrt((nota1 ** 2 + nota2 ** 2 + nota3 ** 2) / 3);
    }

    console.log(`Média calculada: ${media.toFixed(2)}`);
}


function calcularFiguraGeometrica() {
    let opcao = 3; 
    let raio = 5;
    let altura = 10;
    let volume = 0;
    let area = 0;
    const pi = Math.PI;

    if (opcao == 1) { 
        let geratriz = Math.sqrt(raio ** 2 + altura ** 2);
        volume = (1 / 3) * pi * raio ** 2 * altura;
        area = pi * raio * (raio + geratriz);
    } else if (opcao == 2) { 
        volume = pi * raio ** 2 * altura;
        area = 2 * pi * raio * (raio + altura);
    } else if (opcao == 3) {
        volume = (4 / 3) * pi * raio ** 3;
        area = 4 * pi * raio ** 2;
    }

    console.log(`Volume: ${volume.toFixed(2)}`);
    console.log(`Área: ${area.toFixed(2)}`);
}
