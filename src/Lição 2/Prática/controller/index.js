import services from '../services/index.js';

const getAllUsers = async (req, res) => {

    try {

        const users = await services.getAllUsers();

        if (users.length === 0) {

            return res.status(404).send({ message: 'Nenhum usuário encontrado.' });
        }

        return res.status(200).send(users);
    } catch (error) {

        console.log(error);
        return res.status(500).send("Erro no servidor");
    }
}

const getUser = async (req, res) => {

    try {

        const ID = req.body.ID;

        const user = await services.getUser(ID);

        if (user.length === 0) {

            return res.status(404).send({ message: 'Nenhum usuário encontrado.' });
        }

        return res.status(200).send(user);
    } catch (error) {

        console.log(error);
        return res.status(500).send("Erro no servidor");
    }
}

const createUser = async (req, res) => {

    try {

        const { name, description } = req.body;

        const newUser = await services.createUser({ name, description });

        return res.status(201).send(users);
    } catch (error) {

        console.log(error);
        return res.status(500).send("Erro no servidor");
    }
}

const getAllUsers = async (req, res) => {

    try {

        const users = await services.getAllUsers();

        if (users.length === 0) {

            return res.status(404).send({ message: 'Nenhum usuário encontrado.' });
        }

        return res.status(200).send(users);
    } catch (error) {

        console.log(error);
        return res.status(500).send("Erro no servidor");
    }
}
const getAllUsers = async (req, res) => {

    try {

        const users = await services.getAllUsers();

        if (users.length === 0) {

            return res.status(404).send({ message: 'Nenhum usuário encontrado.' });
        }

        return res.status(200).send(users);
    } catch (error) {

        console.log(error);
        return res.status(500).send("Erro no servidor");
    }
}
