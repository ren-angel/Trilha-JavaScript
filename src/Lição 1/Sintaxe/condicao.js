// O 'if-else' verifica condições booleanas, permitindo melhores testes com operadores lógicos. É mais flexível e pode ser usado para comparar qualquer tipo de dado
const i = 5;
if (i < 8) {
    
    console.log("if");
} else if (i > 6) {
    
    console.log("else if");
} else {

    console.log("else");
}

// O 'switch-case' compara uma variável com múltiplos valores possíveis de forma mais eficiente que múltiplos if-else encadeados. É mais indicado para quando há várias condições a serem verificadas
const string = "texto";
switch (string) {

    case "string":

        console.log("case string");
        break;
    case "texto":

        console.log("case texto");
        break;
    default:
        console.log("default");
        break;
}