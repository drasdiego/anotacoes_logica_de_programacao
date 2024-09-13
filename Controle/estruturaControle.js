// Estrutura de Controle 

// Se -> IF 

/*
Se estiverSol
    Vamos à padaria
*/

if (true) {
    console.log("Vamos à padaria!"); // Esta mensagem será exibida porque a condição é verdadeira.
}

/* 
if (false) {
    console.log("Não vamos à padaria!"); 
    // Esta mensagem não será exibida porque a condição é falsa.
    // Quando a condição é false, o bloco de código dentro do if não é executado.
*/     

let idade = 18;

// Verificação se a pessoa pode entrar
if (idade >= 18) 
    console.log("Pode entrar!"); // A mensagem "Pode entrar!" será exibida porque a condição é verdadeira.


if (idade <= 18) 
    console.log("Não pode entrar!"); // Esta mensagem será exibida se a idade for menor que 18.

let idadeCliente = 30; 
let temCarteira = true;

// Verifica se a idade do cliente é maior ou igual a 18
if (idadeCliente >= 18) 
    console.log("Pode Dirigir"); // Esta mensagem será exibida porque a idade é maior ou igual a 18.


// Verifica se o cliente possui carteira de motorista
if (temCarteira == true) 
    console.log("Pode Dirigir"); // Esta mensagem será exibida porque o cliente possui carteira de motorista.


idadeCliente = 17;

// Verifica se o cliente tem idade suficiente e possui carteira de motorista
if (idadeCliente >= 18 && temCarteira == true) 
    console.log("Pode Dirigir"); // Esta mensagem NÃO será exibida porque a idade é menor que 18.


// Verifica se o cliente tem idade suficiente OU possui carteira de motorista
if (idadeCliente >= 18 || temCarteira == true) 
    console.log("Pode Dirigir"); // Esta mensagem será exibida porque o cliente possui carteira de motorista.
let saldoConta = 1; 

// Sem uso de bloco de código 
if (saldoConta > 0)
    console.log("Pode realizar uma compra"); // Esta mensagem será exibida porque o saldo é maior que 0.

// Uso de bloco de código para múltiplas instruções
saldoConta = 0;

    if (saldoConta > 0) 
        {
        console.log("Pode realizar uma compra"); // Esta mensagem NÃO será exibida porque o saldo é 0.
        console.log("Volte sempre"); // Esta mensagem será exibida independentemente do saldo, porque está fora do `if`.
        }

saldoConta = 5;

    if (saldoConta > 0) 
        {
        console.log("Pode realizar uma compra"); // Esta mensagem será exibida porque o saldo é maior que 0.
        console.log("Volte sempre"); // Esta mensagem será exibida, pois o saldo é maior que 0.
        }

       saldoConta = 15;
        let chocolate = 2; 
        
        if (saldoConta > 0) {
            saldoConta = saldoConta - chocolate; // Subtraindo o valor do chocolate do saldo
            console.log("Volte sempre"); // Esta mensagem será exibida porque o saldo é maior que 0.
            console.log("O seu saldo restante é:", saldoConta); // Exibindo o saldo restante corretamente
        }

console.log("Fim da exemplos IF ")

console.log("Inicio de exemplos else ")

// Else  - > Se não 

saldoConta = 15; 
chocolate = 2; 

if (saldoConta >0) {
    console.log("Pode realizar uma compra")

    saldoConta = saldoConta - chocolate; 
    console.log("Volte sempre"); // Esta mensagem será exibida porque o saldo é maior que 0.
    console.log("O seu saldo restante é:", saldoConta); // Exibindo o saldo restante corretamente    
} else {
    console.log("Realize um empréstimo conosco.")
}

let notaAluno = 5;

if (notaAluno >= 5) {
    console.log("Parabéns, você aprovado(a)!");
} else if (notaAluno >= 3) {
    console.log("Você está de recuperação!");
} else {
    console.log("Infelizmente, você foi reprovado(a)");
}

//Fim de exemplos