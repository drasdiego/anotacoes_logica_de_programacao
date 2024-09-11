// Operadores Lógicos

// Dados iniciais
let temosDinheiro = true;
let estaEnsolarado = true;

// Operador E (&&)
let resultadoOperadorE = temosDinheiro && estaEnsolarado;
console.log("Resultado do operador E (&&):", resultadoOperadorE); // Saída: true

// Maior idade e carteira de motorista
let maiorDeIdade = true;
let temCarteira = false;
console.log("Resultado do operador E (&&) com maiorDeIdade e temCarteira:", maiorDeIdade && temCarteira); // Saída: false

// Operador OU (||)
let resultadoOperadorOU = maiorDeIdade || temCarteira;
console.log("Resultado do operador OU (||):", resultadoOperadorOU); // Saída: true

let bicicletaAzul = false;
let bicicletaVermelha = true;

// Verifica se temos pelo menos uma bicicleta
let temBicicleta = bicicletaAzul || bicicletaVermelha;
console.log("Tem bicicleta:", temBicicleta); // Saída: true
