// Os operadores 'Spread' e 'Rest' são operadores utilizados para melhor manipulação de arrays e objetos no JavaScript

// Spread: Usado para "espalhar" os elementos de um objeto ou array. Geralmente, é utilizado para copiar, expandir ou combinar dados.
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log("obj2: ", obj2);

function subtracao(a, b, c) {
    return a - b - c;
}
const arr1 = [1, 2, 3];
const valorSub = subtracao(...arr1);
console.log("valorSub: ", valorSub);

console.log()

// Rest: Usado para "recolher" múltiplos elementos em um único array ou objeto, comumente utilizado em parâmetros de função ou para agrupar dados.
const pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };
const { nome, ...resto } = pessoa;
console.log("nome: ", nome);
console.log("resto: ", resto);

function adicao(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
const valorAdd = adicao(1, 2, 3);
console.log("valorAdd: ", valorAdd);