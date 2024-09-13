// Estrutura de repetição FOR

/* 
    Ele é dividido em 3 partes:
    1- Variável de controle: a variável que inicia o loop (neste caso, `quantidade`).
    2- Verificação ou condição: a condição que deve ser verdadeira para o loop continuar (neste caso, `quantidade <= 10`).
    3- Incremento ou modificação da variável de controle: o que acontece com a variável a cada iteração do loop (neste caso, `quantidade++`).
*/

// Exemplo 1: Loop que imprime valores de 0 a 10
for (let quantidade = 0; quantidade <= 10; quantidade++) {
    console.log("Quantidade atual: " + quantidade); // Exibe a quantidade atual em cada iteração
}

console.log(""); // Linha em branco

// Exemplo 2: Loop que imprime "Repetindo" enquanto a hora for menor ou igual a 22
let hora = 20;
for (let i = 0; hora <= 22; i++) {
    console.log("Repetindo"); // Exibe "Repetindo" a cada iteração do loop
    hora++; // Incrementa a hora em 1 a cada iteração
}

console.log(""); // Linha em branco

// Exemplo 3: Loop que imprime valores de 0 a 100
for (let valor = 0; valor <= 100; valor++) {
    console.log("O valor é " + valor); // Exibe o valor atual em cada iteração
    // Nota: O incremento do valor dentro do loop é redundante porque o valor já é incrementado na declaração do loop
}

console.log(""); // Linha em branco

// Exemplo 4: Loop que imprime valores de 0 a 100, pulando de 10 em 10
for (let valor = 0; valor <= 100; valor += 10) {
    console.log("O valor é " + valor); // Exibe o valor atual em cada iteração
    // Nota: O incremento do valor dentro do loop é ajustado na declaração do loop para adicionar 10 a cada iteração.
}

console.log(""); // Linha em branco

// Exemplo 5: Correção do loop que imprime valores de 0 a 100, pulando de 10 em 10
for (let valor2 = 0; valor2 <= 100; valor2 += 10) {
    console.log(`O valor2 é ${valor2}`); // Corrigido para exibir o valor2 corretamente
}

console.log(""); // Linha em branco

// Exemplo 6: Atualização do valor da compra com e sem cupom
let valorCompra = 100; 
let desejaUsarCupom = true; 

// Verifica se o valor da compra é maior que 100 para oferecer um cupom de desconto
if (valorCompra > 100) {
    console.log("Você ganhou um cupom de desconto de 10 Reais");
}

// Se o usuário deseja usar o cupom, aplica o desconto e outros ajustes
if (desejaUsarCupom) {
    valorCompra -= 10; // Aplica o desconto de 10 Reais
    valorCompra += 2.50; // Ajuste adicional no valor da compra
    console.log("O valor da compra atualizado é " + valorCompra); // Exibe o valor atualizado da compra
}

console.log(""); // Linha em branco

// Fim de exemplos
