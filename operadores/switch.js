// Operador Switch 

// Ele é ideal para seleção de multiplos valores 

/*

O switch() é uma estrutura de 
controle de fluxo em linguagens de programação como JavaScript, usada para tomar decisões com base no valor de uma expressão. Ele permite comparar o valor de uma variável ou expressão com várias opções (conhecidas como "casos" ou cases) e executar um bloco de código correspondente ao primeiro caso que coincida.

Conceito básico do switch()
Em vez de usar vários if...else if...else, o switch() pode simplificar o código, tornando-o mais legível 
quando se trata de várias comparações de igualdade com uma única variável.

*/

let nota = 5;

// Estrutura switch para avaliar a nota
switch(nota) {
    case 7:
        console.log("Você passou com nota 7!"); // Se `nota` for 7, este bloco será executado
        break; // Interrompe a execução do switch, evitando a execução de blocos seguintes
    case 5:
        console.log("Você passou com nota 5!"); // Se `nota` for 5, este bloco será executado
        break; // Interrompe a execução do switch, evitando a execução de blocos seguintes
    case 4:
        console.log("Você passou com nota 4!"); // Se `nota` for 4, este bloco será executado
        break; // Interrompe a execução do switch, evitando a execução de blocos seguintes
    default:
        console.log("Nota não reconhecida"); // Este bloco será executado se nenhum dos casos anteriores for atendido
}

let nota2 = 10; // A variável nota2 é avaliada no segundo switch
let DesejaReceberUmPresente = true; // Flag para decidir se um presente deve ser dado

// Estrutura switch para avaliar nota2 e decidir a mensagem apropriada
switch(nota2) {
    case 10: 
    case 9:
        console.log("Você passou!"); // Se `nota2` for 9 ou 10, este bloco será executado
        if (DesejaReceberUmPresente) {
            console.log("Ganhou um presente!"); // Se DesejaReceberUmPresente for verdadeiro, imprime a mensagem
        }
        break; // Interrompe a execução do switch, evitando a execução de blocos seguintes
    case 8:
    case 7:
    case 6:
    case 5:
        console.log("Você passou!"); // Se `nota2` estiver entre 5 e 8, este bloco será executado
        break; // Interrompe a execução do switch, evitando a execução de blocos seguintes
    case 4: // Casos 4 e 3 resultam na mensagem de recuperação
    case 3:
        console.log("Você está em recuperação!"); // Se `nota2` for 4 ou 3, este bloco será executado
        break; // Interrompe a execução do switch, evitando a execução de blocos seguintes
    case 2: // Casos 2 e 1 resultam na mensagem de reprovação
    case 1: 
        console.log("Você foi reprovado(a)!"); // Se `nota2` for 2 ou 1, este bloco será executado
        break; // Interrompe a execução do switch, evitando a execução de blocos seguintes
    default:
        console.log(`O valor "${nota2}" informado é inválido`); // Este bloco será executado se nenhum dos casos anteriores for atendido
}

// Switch com horas

let hora = 10;

switch (hora) {
    case 8: case 7: case 6: case 5: case 9: case 10:
        console.log("Bom dia!");
        break;

    default:
        console.log("Hora informada não existe.");
        console.log(`A hora "${hora}" informada não é válida, informe uma hora correta.`);
        break;
}
