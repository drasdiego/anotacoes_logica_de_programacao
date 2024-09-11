// Variáveis e Constantes 

const taxaCartao = 1;
let camisa = 10; 
let sapato = 20;
let calca = 30;

// Podemos inserir textos que antecedem os resultados, para concatenar os valores que serão mostrados.

console.log("Total da soma:", 15 + 20); // Simulando uma soma: 35
console.log("Total da compra:", camisa + sapato); // Simulando a soma da compra: 30

let totalCompra = camisa + sapato; // totalCompra será 30

console.log("Soma das variáveis total da compra + taxa do cartão:", totalCompra + taxaCartao); // Saída: 31

// Outra opção de soma
totalCompra = camisa + sapato + taxaCartao; // totalCompra será 31
console.log("Somando as 3 variáveis (camisa, sapato e taxa) =", totalCompra);  // Saída: 31
