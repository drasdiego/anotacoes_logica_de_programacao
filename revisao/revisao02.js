 //Trabalhando com Strings 

 let saudacao = "Bom dia"; 
 let nomeCliente = "Diego";
 let saldo = 100;
 let saque = 20; 

 console.log (`${saudacao}, ${nomeCliente}! Obrigado por utilizar os nossos serviços.`);
 console.log (`O seu saldo atualizado após o saque é de ${saldo - saque}`);

// Constante para armazenar os CPFs
const cpfs = ["000.111.222-33"];

// Função para registrar CPFs
function registrarCPF(novoCPF) {
    // Validação simples para verificar se o CPF tem 11 dígitos
    if (novoCPF.length === 14 && novoCPF.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
        cpfs.push(novoCPF); // Adiciona o CPF ao array
        console.log(`CPF ${novoCPF} registrado com sucesso!`);
    } else {
        console.log("CPF inválido. Tente novamente.");
    }
}
// Exemplo de uso da função
registrarCPF ("111.222.333-44")
registrarCPF ("222.333.444-55"); // Adiciona um novo CPF ao array
registrarCPF ("333.444.555-66"); // Adiciona outro novo CPF ao array


// Exibe todos os CPFs registrados
console.log("CPFs registrados:", cpfs);

console.log(`Primeiro CPF cadastrado é ${cpfs[0]}`);

registrarCPF ("444.555.666-77");
