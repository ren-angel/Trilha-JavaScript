// O 'function' cria uma função, contendo um bloco de código reutilizável que pode ser reaproveitado em outras partes do código, além de mantê-lo organizado
function adicao(valor1, valor2) {

    return valor1 + valor2;
}

let valorFinal = adicao(4, 3);
console.log(valorFinal);

// O 'arrow function' cria uma função assim como 'function', mudando apenas a síntaxe e o comportamento do 'this' (explicado no arquivo 'this.js')
const subtracao = (valor1, valor2) => {

    return valor1 - valor2;
}

valorFinal = subtracao(4, 3);
console.log(valorFinal);