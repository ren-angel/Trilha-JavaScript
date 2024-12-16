import path from 'path';
import { fileURLToPath } from 'url';
import express from "express";
import methodOverride from 'method-override';
import sequelize from "../Infrastructure/database/db.js";
import produtosRouter from "./Routes/ProdutosRoutes.js";
import pedidosRouter from './Routes/PedidosRoutes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');

app.set('views', [
  path.join(__dirname, '..', 'Interface', 'Views', 'Produtos'),
  path.join(__dirname, '..', 'Interface', 'Views', 'Pedidos')
]);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(methodOverride(function (req, res) {

    if (req.body && typeof req.body === 'object' && '_method' in req.body) {

      var method = req.body._method
      delete req.body._method
      return method
    }
}));

app.use("/produtos", produtosRouter);
app.use("/pedidos", pedidosRouter);

const startServer = async () => {

  await sequelize.sync();
  
  app.listen(3000, () => console.log("Servidor rodando"));
};

startServer();
