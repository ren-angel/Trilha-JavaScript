// Neste arquivo, geralmente chamado 'server.js', é onde configuramos e iniciamos o servidor
import express from 'express';
import router from './routes/routes.js';

// Criamos a aplicação em si, que será nosso servidor
const app = express();

// Permite o servidor 'parsear' dados em JSON
app.use(express.json());

// Define as rotas que criamos
app.use(router);

// Inicia o servidor
app.listen(3000, () => {

    console.log('Servidor rodando em http://localhost:3000');
});