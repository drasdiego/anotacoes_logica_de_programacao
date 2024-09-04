const nome = "Ana";
console.log(nome);

celular = 5;
console.log(celular);

let x = 10;
console.log(x);

// Exemplo importância do bloco 

let nome = "José"; // Variável global (dentro do bloco principal)

{
    let nome = "Gabriel"; // Aqui você está alterando a variável global
    console.log(nome); // Saída: "Gabriel"
}

console.log(nome); // Saída: "Gabriel"
