// Obter a data atual automaticamente
let dataAtual = new Date();
console.log("Data de hoje:", dataAtual);

// Operador ternário

// Ele é mais utilizado para casos de resultados positivos e negativos 

let temDinheiro = true; 

//         Verificação      ? Positivo    :       Negativo
let comprarPao = temDinheiro ? "Vou comprar pão!" : "Não vou comprar pão";

console.log(comprarPao); // Saída: "Vou comprar pão!"

// O operador ternário funciona assim: condição ? valor_se_verdadeiro : valor_se_falso.
// O código verifica se temDinheiro é verdadeiro. Se for, 
// a mensagem "Vou comprar pão!" é atribuída à variável 
// comprarPao. Caso contrário, "Não vou comprar pão" seria o valor.

// Verificação de idade
let idade = 18;
let validarIdade = idade >= 18 ? "Pode entrar!" : "Não pode entrar!";
console.log(validarIdade); // Saída: "Pode entrar!" (corrigido para >= 18)

// Verificação de idade com ano de nascimento
let ano = 2024;
let anoNascimento = 1991;

// Calculando a idade e usando o operador ternário
let idadeCalculada = ano - anoNascimento;
let validarIdadeAno = idadeCalculada >= 18 ? "Pode entrar!" : "Não pode entrar!";
console.log(validarIdadeAno, "(idade:", idadeCalculada, ")"); // Saída: "Pode entrar! (idade: 33)"



