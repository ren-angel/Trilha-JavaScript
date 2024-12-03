// A expressão 'Destructuring' se refere ao ato de "despacotar" os valores de uma array ou as propriedades de um objeto em variáveis distintas
const pessoa = {
    primeiroNome: "John",
    ultimoNome: "Doe",
    idade: 50
};

const { primeiroNome, ultimoNome } = pessoa;

console.log(primeiroNome, ultimoNome)