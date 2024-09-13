// // Exemplo da estrutura IF
let saldoConta = 499;
let aceitaEmprestimo = true;
let nomeSujo = true; // O nome sujo impede o empréstimo
let situacaoNomeCliente = "limpo"

// Se (condição ou expressão) {}
if (saldoConta >= 500) { 
    console.log("Posso comprar"); // Esta mensagem será exibida se o saldo for maior ou igual a 500.
    //              Verdadeiro          e Verdadeiro 

} else if (aceitaEmprestimo == true && situacaoNomeCliente ==="limpo") {  
    console.log("Eu aceito fazer um empréstimo"); // Esta mensagem será exibida se o cliente aceita o empréstimo e não tem nome sujo.
} else {
    console.log("Infelizmente, você não pode comprar"); // Esta mensagem será exibida se nenhuma das condições anteriores for atendida.
}


// Exemplo 02 

let idade = 20;
let correntista = true;
let temConsorcio = true; 
let temFinanciamentoContratado = false; 

if (idade >= 30 && correntista === true && temConsorcio === true) {
    console.log("Pode oferecer um limite maior de cartão.");
} else {
    console.log("Não pode oferecer um limite maior de cartão.");
}

// Exemplo 03 - Idade

let maiorDeIdade = true; 
console.log("O valor da variavel é " + !maiorDeIdade);


//Fim de exemplos