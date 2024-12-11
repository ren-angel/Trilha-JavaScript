import express from "express";
import sequelize from "../Infrastructure/database/db.js";
import contasRouter from "./Routes/routes.js";

const app = express();
app.use(express.json());
app.use("/contas", contasRouter);

const startServer = async () => {

  await sequelize.sync();
  
  app.listen(3000, () => console.log("Servidor rodando"));
};

startServer();
