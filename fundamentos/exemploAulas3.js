const nome = "Ana";
console.log(nome); // Saída: "Ana"

let celular = 5;
console.log(celular); // Saída: 5

let x = 10;
console.log(x); // Saída: 10

// Exemplo de importância do bloco

let nomeGlobal = "José"; // Variável global

{
    let nomeLocal = "Gabriel"; // Variável local dentro do bloco
    console.log(nomeLocal); // Saída: "Gabriel"
}

console.log(nomeGlobal); // Saída: "José"

//Fim de exemplos