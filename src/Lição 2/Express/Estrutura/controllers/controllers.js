// Em 'controllers', criamos as funções que diram o que cada rota fará quando forem acessadas

// Aqui, criamos cada função como assíncrona. Sempre coloque req (request) e res (response) nos paramêtros da função
const HelloWorld = async (req, res) => {

    // Define o que está função enviará de volta ao cliente. Neste caso, um json contendo a propriedade 'message' com valor 'Hello World!'
    res.json({ message: "Hello World!" });
}

const postMessage = async (req, res) => {

    // Pega os dados enviadas pelo cliente e os coloca como variáveis para uso
    const { message } = req.body;

    // Manda a resposta com o status code apropriado. Neste caso, para posts se envia '201 Created'
    res.status(201).json({ message });
}

// Exporta as funções para uso externo
export default {
    HelloWorld,
    postMessage
};