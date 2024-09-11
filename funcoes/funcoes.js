// Exemplo sem uso de função 

let nome = "Diego"; // Definindo o nome da primeira pessoa como "Diego".
let cidade = "Curitiba"; // Definindo a cidade da primeira pessoa como "Curitiba".

// Exibindo as informações diretamente no console sem função.
console.log("Meu nome é " + nome); // Mostra "Meu nome é Diego".
console.log("Moro em " + cidade); // Mostra "Moro em Curitiba".

let nome2 = "Maria"; // Definindo o nome da segunda pessoa como "Maria".
let cidade2 = "Santa Catarina"; // Definindo a cidade da segunda pessoa como "Santa Catarina".

// Exibindo as informações da segunda pessoa diretamente no console.
console.log("Meu nome é " + nome2); // Mostra "Meu nome é Maria".
console.log("Moro em " + cidade2); // Mostra "Moro em Santa Catarina".

// Estrutura base de uma função
// Definindo a função "mostraDados" que vai exibir o nome e cidade da primeira pessoa.
function mostraDados() {
    console.log("Meu nome é " + nome); // Mostra "Meu nome é Diego" dentro da função.
    console.log("Moro em " + cidade); // Mostra "Moro em Curitiba" dentro da função.
    console.log("Dentro da Função"); // Mostra "Dentro da Função" para indicar que a função foi executada.
}

mostraDados(); // Chamada da função "mostraDados", que executa o bloco de código acima.

// Definindo a função "mostraDados2" que vai exibir o nome e cidade da segunda pessoa.
function mostraDados2() {
    console.log("Meu nome é " + nome2); // Mostra "Meu nome é Maria" dentro da função.
    console.log("Moro em " + cidade2); // Mostra "Moro em Santa Catarina" dentro da função.
    console.log("Dentro da Função"); // Mostra "Dentro da Função" para indicar que a função foi executada.
}

mostraDados2(); // Chamada da função "mostraDados2", que executa o bloco de código acima.
