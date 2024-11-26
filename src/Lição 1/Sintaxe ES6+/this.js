// O 'arrow function' possuí a mesma funcionalidade do function, mudando apenas a sua síntaxe e o comportamento do this. Em 'function', 'this' é dinâmico, ou seja, definido no momento da execução dependendo do contexto da chamada

// this = pessoa, permitindo acessar suas propriedades.
const pessoa = {
    nome: "João",
    saudar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};
pessoa.saudar();

// Enquanto nas 'arrow functions', 'this' é léxico, determinado no momento da definição, ou seja, herda o this do escopo em que foi criada

// this = Timer, garantindo que `this.segundos` funcione corretamente dentro do `setInterval`.
class Timer {
    constructor() {
        this.segundos = 0;
        setInterval(() => {
            this.segundos++;
            console.log(this.segundos);
        }, 1000);
    }
}
const meuTimer = new Timer();