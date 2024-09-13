// Função que exibe apenas o nome
function exibeDados1(nome) {
    console.log("Meu nome é " + nome);
}

// Chamadas da função com um argumento
exibeDados1("Diego"); // Exibe "Meu nome é Diego"
exibeDados1("Rafael"); // Exibe "Meu nome é Rafael"

// Função que exibe o nome e a cidade
function exibeDados2(nome, cidade) {
    console.log("Meu nome é " + nome);
    console.log("Moro em " + cidade);
}

// Chamadas da função com dois argumentos
exibeDados2("Diego", "São José dos Pinhais"); // Exibe "Meu nome é Diego" e "Moro em São José dos Pinhais"
exibeDados2("Rafael", "Curitiba"); // Exibe "Meu nome é Rafael" e "Moro em Curitiba"

// Função que exibe o nome e a cidade
function exibeDados(nome, cidade) {
    console.log("Meu nome é " + nome + " e moro em " + cidade + ".");
}

// Chamadas da função com dois argumentos
exibeDados("Diego", "Curitiba"); // Exibe "Meu nome é Diego e moro em Curitiba."

// Função que calcula a soma
function soma(numero1, numero2) {
    console.log(`A soma de ${numero1} com ${numero2} é ${numero1 + numero2}`);
}

soma(2, 3); // Exibe "A soma de 2 com 3 é 5"

// Função Soma 2
function soma2(numero1, numero2) {
    let resultadoSoma = numero1 + numero2;
    console.log("O resultado da soma é " + resultadoSoma);
    console.log(`A soma de ${numero1} com ${numero2} é ${numero1 + numero2}`);
}

soma2(4, 7); // Exibe "O resultado da soma é 11" e "A soma de 4 com 7 é 11"

// Função que calcula a multiplicação
function multiplicacao(numero1, numero2) {
    console.log(`A multiplicação de ${numero1} com ${numero2} é ${numero1 * numero2}`);
}

multiplicacao(2, 3); // Exibe "A multiplicação de 2 com 3 é 6"

// Função que calcula a divisão
function divisao(numero1, numero2) {
    console.log(`A divisão de ${numero1} com ${numero2} é ${numero1 / numero2}`);
}

divisao(4, 2); // Exibe "A divisão de 4 com 2 é 2"

// Função que calcula a subtração
function subtracao(numero1, numero2) {
    console.log(`A subtração de ${numero1} com ${numero2} é ${numero1 - numero2}`);
}

subtracao(2, 3); // Exibe "A subtração de 2 com 3 é -1"

// Função que calcula a exponenciação
function exponenciacao(numero1, numero2) {
    console.log(`A exponenciação de ${numero1} elevado a ${numero2} é ${Math.pow(numero1, numero2)}`);
}

exponenciacao(2, 3); // Exibe "A exponenciação de 2 elevado a 3 é 8"

// Função que calcula a raiz quadrada
function raizQuadrada(numero) {
    console.log(`A raiz quadrada de ${numero} é ${Math.sqrt(numero)}`);
}

raizQuadrada(4); // Exibe "A raiz quadrada de 4 é 2"

//Fim de exemplos