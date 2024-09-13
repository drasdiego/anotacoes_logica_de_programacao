// Operadores Lógicos

// Dados iniciais
let temosDinheiro = true;
let estaEnsolarado = true;

console.log(""); // Linha em branco

// Operador E (&&)
let resultadoOperadorE = temosDinheiro && estaEnsolarado;
console.log("Resultado do operador E (&&):", resultadoOperadorE); // Saída: true

console.log(""); // Linha em branco

// Maior idade e carteira de motorista
let maiorDeIdade = true;
let temCarteira = false;
console.log("Resultado do operador E (&&) com maiorDeIdade e temCarteira:", maiorDeIdade && temCarteira); // Saída: false

console.log(""); // Linha em branco

// Operador OU (||)
let resultadoOperadorOU = maiorDeIdade || temCarteira;
console.log("Resultado do operador OU (||):", resultadoOperadorOU); // Saída: true

let bicicletaAzul = false;
let bicicletaVermelha = true;

console.log(""); // Linha em branco

// Verifica se temos pelo menos uma bicicleta
let temBicicleta = bicicletaAzul || bicicletaVermelha;
console.log("Tem bicicleta:", temBicicleta); // Saída: true

// Fim de exemplos
