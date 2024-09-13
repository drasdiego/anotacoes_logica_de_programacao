// For in

let sobrenome = ["Silva", "Souza", "Santos"];

// Exibe o primeiro elemento do array
console.log(sobrenome[0]); // Exibe "Silva"

// Te retorna os índices
for (let indice in sobrenome) {
    console.log("O índice " + indice + " possui o valor " + sobrenome[indice]);
}

console.log(""); // Linha em branco

// Te retorna os valores dos elementos
for (let valor of sobrenome) {
    console.log(valor);
}

console.log(""); // Linha em branco

let valores = [10, 15, 12, 20, 50];

// Exibe cada valor do array
for (let valor of valores) {
    console.log(valor);
}

console.log(""); // Linha em branco

// Te retorna os índices e valores
for (let indice in valores) {
    console.log("O índice " + indice + " possui o valor " + valores[indice]);
}

console.log(""); // Linha em branco

// Calcula e exibe a soma total dos valores
let somaTotal = 0;
for (let indice in valores) {
    console.log(valores[indice]); // Exibe o valor correspondente ao índice atual
    somaTotal += valores[indice]; // Adiciona o valor ao total
}

console.log("O valor da soma total é " + somaTotal); // Exibe a soma total
