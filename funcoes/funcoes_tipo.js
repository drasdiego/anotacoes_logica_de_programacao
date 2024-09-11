// 1 - Função com parâmetro e sem retorno
// Esta função recebe um argumento (saudacao) e imprime uma mensagem no console.
function tipoUm(saudacao) {
    console.log(saudacao + ", tudo bem?");
}

tipoUm("Bom dia");  // Exibe "Bom dia, tudo bem?"
tipoUm("Boa tarde"); // Exibe "Boa tarde, tudo bem?"
tipoUm("Boa noite"); // Exibe "Boa noite, tudo bem?"

// 2 - Função sem parâmetro e sem retorno
// Esta função não recebe argumentos e imprime uma mensagem fixa no console.
function tipoDois() {
    console.log("au, au, au");
}

tipoDois(); // Exibe "au, au, au"

// 3 - Função com parâmetro e com retorno
// Esta função recebe dois argumentos (numero1 e numero2), realiza a soma e retorna o resultado.
function soma(numero1, numero2) {
    return numero1 + numero2;
}

// Exibindo os resultados da soma
console.log(soma(5, 5));  // Exibe "10"
console.log(soma(10, 5)); // Exibe "15"
console.log(soma(15, 5)); // Exibe "20"

// Função para exibir o resultado da soma com mensagem
function exibeResultado2(numero1, numero2) {
    const resultado = soma(numero1, numero2);
    console.log(`O resultado da soma é ${resultado}`);
}

exibeResultado2(5, 5);  // Exibe "O resultado da soma é 10"
exibeResultado2(10, 5); // Exibe "O resultado da soma é 15"
exibeResultado2(15, 5); // Exibe "O resultado da soma é 20"
