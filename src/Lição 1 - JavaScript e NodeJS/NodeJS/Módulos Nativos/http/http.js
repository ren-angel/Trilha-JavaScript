// O módulo 'http' permite criar servidores HTTP para lidar com requisições e respostas, sendo a base de servidores web no Node.js

// Criando um servidor simples com rotas
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Bem-vindo à página inicial!');
    } else if (req.url === '/sobre') {

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Página sobre nós.');
    } else {

      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Página não encontrada.');
    }
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});