// O loop 'while' itera sobre o bloco de código dentro do loop baseado na condição definida dentro do parênteses. O valor inicial é definido antes do loop, e o passo é definido dentro do bloco de código em si
let j = 0;
while (j < 5) {

    console.log("while: ", j);
    j++;
}

// O loop 'do while' itera sobre o bloco de código dentro do loop baseado na condição definida dentro do parênteses após o while. O do while sempre roda pelo menos uma vez. O valor inicial é definido antes do loop, e o passo é definido dentro do bloco de código em si
let k = 0;
do {

    console.log("do while: ", k);
    k++;
} while (k < 5);

// O loop 'for' itera sobre o bloco de código dentro do loop, e o repete baseado nas três condições postas dentro de seus parênteses, senda elas:
//    - O valor inicial (você pode defini-lo dentro das próprias condições do loop)
//    - A condição de termino do loop
//    - O passo, o que será feito após cada loop
for (let i = 0; i < 5; i++) {

    console.log("for: ", i);
}