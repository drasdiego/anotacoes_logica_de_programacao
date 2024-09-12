// Array ou Vetor ou Lista

// Declaração de variáveis individuais
let nome1 = "Gabriel";
let nome2 = "Gabriela";
let nome3 = "Gabriella";

// Estrutura base do array com três elementos
let nome = ["Gabriel", "Gabriela", "Gabriella"];

console.log(nome[0]); // Exibe "Gabriel" (elemento no índice 0)
console.log(nome[1]); // Exibe "Gabriela" (elemento no índice 1)
console.log(nome[2]); // Exibe "Gabriella" (elemento no índice 2)

// Elementos: Itens dentro do array, ou seja, os elementos do array são acessados por meio desses índices.
// Índices: Posições dos elementos no array (começam do zero), ou seja, índices são baseados em zero e contínuos

// Exibe o array completo no console
// Quantidade de elementos  1           2            3
// Índices                   0           1            2
console.log(nome); // ["Gabriel", "Gabriela", "Gabriella"]

// Criação de um array vazio para sobrenome
let sobrenome = [];

// Inicialização do array sobrenome com valores
sobrenome = ["Silva", "Souza", "Santos"];

// Exibe a combinação dos elementos dos arrays nome e sobrenome
console.log(nome[1] + " " + sobrenome[1]); // Exibe "Gabriela Souza"

// Declaração da variável idade
let idade = 60;

// Exibe o valor da idade no console
console.log(idade); // Exibe 60

// Acesso aos elementos do array 'nome' através do índice
console.log(nome[0]); // Exibe "Gabriel"

// Atualiza o terceiro elemento do array 'nome'
nome[2] = "Cleiton";

// Exibe o array atualizado no console
console.log(nome); // Exibe ["Gabriel", "Gabriela", "Cleiton"]

// Acesso e exibição do terceiro elemento atualizado do array 'nome'
console.log(nome[2]); // Exibe "Cleiton"

// Adiciona um ou mais elementos ao final do array
nome.push("Ines"); 
console.log(nome); // Exibe [ 'Gabriel', 'Gabriela', 'Cleiton', 'Ines' ]

// Adiciona um ou mais elementos ao início do array
nome.unshift("Alexandre"); 
console.log(nome); // Exibe [ 'Alexandre', 'Gabriel', 'Gabriela', 'Cleiton', 'Ines' ]

// Remove o último elemento do array
nome.pop(); 
console.log(nome); // Exibe [ 'Alexandre', 'Gabriel', 'Gabriela', 'Cleiton' ]

// Remove o primeiro elemento do array
nome.shift(); 
console.log(nome); // Exibe [ 'Gabriel', 'Gabriela', 'Cleiton' ]

// Verifica se o elemento "Rafael" está presente no array 'nome'
// O resultado será false, pois "Rafael" não está no array
console.log(nome.includes("Rafael")); // Exibe false

// Criação e exibição de um novo array 'valores'
let valores = [10, 15, 12, 20, 50];

// Exibe o array 'valores' no console
console.log(valores); // Exibe [10, 15, 12, 20, 50]

// Exibe o número de elementos no array 'valores'
console.log(valores.length); // Exibe 5

// Exibe o elemento no índice 2 do array 'valores'
console.log(valores[2]); // Exibe 12

// Adiciona um novo elemento na posição índice 5 do array 'valores'
// Como o índice 5 está fora do tamanho atual do array (que tem 5 elementos), 
// o JavaScript preenche os índices ausentes com 'undefined'

valores[5] = "teste";
console.log(valores); // Exibe [10, 15, 12, 20, 50, "teste"]

// Atualiza o valor no índice 5 para "60"
// A posição índice 5 agora contém o valor "60", substituindo "teste"

valores[5] = "60";
console.log(valores); // Exibe [10, 15, 12, 20, 50, "60"]