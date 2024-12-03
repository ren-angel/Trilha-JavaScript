import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Aqui, usamos duas bibliotecas externas na nossa API, sendo ela 'body-parser' e 'cors'
// 'body-parser' é um middleware que provê várias funções para 'parsear' o corpo de requisições HTTP, como bodyParser.urlencoded(). Neste exemplo, bodyParser.json() tem o mesmo propósito que express.json() 
// 'cors' (Cross-Origin Resource Sharing) é um middleware que permite que recursos de um servidor sejam acessados por páginas da web de domínios diferentes do domínio de onde os recursos estão hospedados. Isso é importante para permitir que as aplicações front-end acessem recursos de servidores diferentes sem enfrentar restrições de segurança. Por padrão, os navegadores restringem as solicitações feitas entre domínios diferentes para proteger a privacidade do usuário e evitar ataques de Cross-Site Scripting (XSS). O CORS permite que os servidores especifiquem quais origens (domínios) podem acessar seus recursos
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {

    res.json({ message: "Hello World!" });
})

app.listen(3000, () => {

    console.log("Servidor rodando em http://localhost:3000")
})