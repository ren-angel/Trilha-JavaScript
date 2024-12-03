import express from 'express';
import methodOverride from 'method-override';
import router from './routes/index.js';

const app = express();

// Define o motor de visualização da API para EJS
app.set('view engine', 'ejs');

// Middleware para 'parsear' dados de forms codificado em URL. Usado para nossa API reconhecer dados enviados por um cliente HTML
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Forms só possui suporte aos métodos GET e POST. Por isso, usamos a biblioteca method-override para sobrescrever os métodos dos Forms para outros além de GET e POST, sempre que você o chamar no HTML com o código `<input type="hidden" name="_method" value="insira o método correto aqui">` dentro do Forms
app.use(methodOverride(function (req, res) {

    if (req.body && typeof req.body === 'object' && '_method' in req.body) {

      var method = req.body._method
      delete req.body._method
      return method
    }
}))

app.use(router);

app.listen(3000, () => {
    console.log("Servidor rodando.")
});