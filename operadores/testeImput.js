const readline = require('readline');

// Criando interface para leitura de input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(""); // Linha em branco

// Função que retorna uma promessa para o input do usuário
function questionAsync(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

console.log(""); // Linha em branco

// Estoque de produtos
let qtdCaneta = 30;
let qtdCaderno = 20;
let qtdLapis = 30;
let qtdBorracha = 40;

// Cadastro de Produtos (preços)
let caneta = 1.50;
let caderno = 9.90;
let lapis = 1.00;
let borracha = 0.50;

console.log(""); // Linha em branco

(async function() {
    try {
        // Solicitando a quantidade comprada de cada produto
        let qtdCompradaCaneta = parseInt(await questionAsync("Quantas canetas você quer comprar? "));
        let qtdCompradaCaderno = parseInt(await questionAsync("Quantos cadernos você quer comprar? "));
        let qtdCompradaLapis = parseInt(await questionAsync("Quantos lápis você quer comprar? "));
        let qtdCompradaBorracha = parseInt(await questionAsync("Quantas borrachas você quer comprar? "));

        console.log(""); // Linha em branco

        // Verificando se há estoque suficiente
        if (qtdCompradaCaneta > qtdCaneta || qtdCompradaCaderno > qtdCaderno || qtdCompradaLapis > qtdLapis || qtdCompradaBorracha > qtdBorracha) {
            console.log("Desculpe, não há estoque suficiente para completar a compra.");
        } else {
            // Calculando o valor total da compra
            let valorTotal = (caneta * qtdCompradaCaneta) + (caderno * qtdCompradaCaderno) + (lapis * qtdCompradaLapis) + (borracha * qtdCompradaBorracha);
            console.log("Valor total da compra: R$ " + valorTotal.toFixed(2));

            // Atualizando o estoque
            qtdCaneta -= qtdCompradaCaneta;
            qtdCaderno -= qtdCompradaCaderno;
            qtdLapis -= qtdCompradaLapis;
            qtdBorracha -= qtdCompradaBorracha;

            console.log(""); // Linha em branco

            // Exibindo o estoque atualizado
            console.log("Estoque atualizado:");
            console.log("Canetas restantes: " + qtdCaneta);
            console.log("Cadernos restantes: " + qtdCaderno);
            console.log("Lápis restantes: " + qtdLapis);
            console.log("Borrachas restantes: " + qtdBorracha);
        }

    } catch (err) {
        console.error("Erro: ", err);
    } finally {
        // Fechando a interface de leitura
        rl.close();
    }
})();

console.log(""); // Linha em branco

// Fim de exemplos
