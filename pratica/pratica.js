// Variáveis
let carro = "Gol";
let tanqueCombustivel = 40;
let tanqueAtual = 15;
let tipoCombustivel = "Gasolina";
let valorParaAbastecer = 20;
let qtdeCombustivel = 0;

let precoGasolina = 5.50;
let precoAlcool = 3.50;

let formaPagamento = "Crédito";
let temCupom = true;
let descontoApp = 0.05; // 5% de desconto
let impostoGasolina = 1.05; // 5% de imposto
let impostoAlcool = 1.02;   // 2% de imposto

// Funcionalidades
function abastecer(tipoCombustivel, valorParaAbastecer) {
    if (tipoCombustivel === "Gasolina") {
        // Calculo gasolina
        qtdeCombustivel = (valorParaAbastecer / precoGasolina).toFixed(2);

        console.log("Quantidade do tanque antes de abastecer: " + tanqueAtual);

         // Converter para número, devido o uso do toFixed anteriormente 
        tanqueAtual = parseFloat(tanqueAtual) + parseFloat(qtdeCombustivel);
        
        console.log("Quantidade abastecida: " + qtdeCombustivel);
        console.log("Quantidade do tanque após abastecer: " + tanqueAtual); // Formata para 2 casas decimais
    } else if (tipoCombustivel === "Álcool") {
        // Calculo álcool
    } else {
        console.log("O tipo de combustível informado não existe.");
    }
}

function pagamento() {
}

// Testes
abastecer("Gasolina", 30);


//Descobrir os tipos de dados que estamos atuando 
// typeof

console.log (typeof (tanqueAtual));