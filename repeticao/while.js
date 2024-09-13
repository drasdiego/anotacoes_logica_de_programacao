// Estrutura de repetição While

// Enquanto (condição ou expressão) for verdadeira faça...
// while (true) {
//     console.log ("Isso vai executar");
// }

let contador = 5;  // Inicializa o contador com o valor 5

while (contador <= 5) {  // Enquanto o contador for menor ou igual a 5
    console.log("Isso vai executar " + contador);  // Exibe a mensagem no console
    contador++;  // Incrementa o valor do contador em 1 a cada iteração
}

console.log(""); // Linha em branco

// Exemplo While com pratos

let quantidaDePratos = 0;

while (quantidaDePratos <= 5) {
    console.log("Lavando o prato " + quantidaDePratos);  // Exibe a mensagem no console
    quantidaDePratos += 2;  // Incrementa o valor de quantidaDePratos em 2 a cada iteração
    console.log("Valor somado " + quantidaDePratos);  // Exibe o valor atualizado de quantidaDePratos
}

console.log("Pratos Lavados");  // Mensagem após o término do primeiro loop

quantidaDePratos = 5;  // Redefine quantidaDePratos para 5

while (quantidaDePratos <= 5) {
    console.log("Lavando o prato " + quantidaDePratos);  // Exibe a mensagem no console
    quantidaDePratos += 1;  // Incrementa o valor de quantidaDePratos em 1 a cada iteração
}

console.log(""); // Linha em branco

let quantidade = 1;
while (quantidade >= 1 && quantidade <= 5) {
    console.log("Entrou na repetição");
    quantidade++;
}

console.log(""); // Linha em branco

// Fim de exemplos
