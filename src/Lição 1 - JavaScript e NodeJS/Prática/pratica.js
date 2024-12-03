// Neste exemplo, usamos a função 'createServer' do módulo 'http' para criar um simples servidor
const { createServer } = require('node:http');

// Aqui definimos os paramêtros do servidor, que no caso são:
// O 'host' do servidor, onde usamos o IP 127.0.0.1, que é o IP para 'localhost'.
// A porta do servidor, onde usamos a porta 3000, que é a porta padrão do NodeJS
const hostname = '127.0.0.1';
const port = 3000;

// Aqui criamos o servidor, onde definimos as repostas dele, que são:
// O código http, onde usamos '200' que indica sucesso
// O Header, onde definimos o tipo de conteúdo que o servidor enviará, que no caso será texto
// E o finalizador da resposta, em que, ao finalizar, envia os dados para o cliente (aquele que acessa o servidor). Neste caso, os dados são um simples 'Hello World'
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// Aqui se inicia o servidor, onde o damos as informações que ele precisa, sendo elas a porta e o host
// Também se inclui uma mensagem para saber se o servidor está funcionando
// OBS: Se o host não for incluido nos paramêtros de 'listen()', ele automaticamente atribui o host local da máquina (127.0.0.1)
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

// Para interagir com o servidor, entre no seu navegador e acesse: http://127.0.0.1:3000

// OBS: O servidor não desliga se você fechar o CMD. Então, ao terminar ou quando for reiniciar o servidor, de CTRL + C no CMD para parar o servidor