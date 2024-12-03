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
        return res.status(500).send("Erro no servidor.");
    }
}

const getUser = async (req, res) => {

    try {

        const ID = req.params.id;

        const user = await services.getUser(ID);

        if (!user) {

            return res.status(404).send({ message: 'Nenhum usuário encontrado.' });
        }

        return res.status(200).send(user);
    } catch (error) {

        console.log(error);
        return res.status(500).send("Erro no servidor.");
    }
}

const createUser = async (req, res) => {

    try {

        const { name, description } = req.body;

        const newUser = await services.createUser({ name, description });

        return res.status(201).send({ message: "Usuario criado com sucesso.", newUser });
    } catch (error) {

        console.log(error);
        return res.status(500).send("Erro no servidor.");
    }
}

const updateUser = async (req, res) => {

    try {

        const { ID, name, description } = req.body;

        const updatedUser = await services.updateUser({ ID, name, description });

        return res.status(200).send({ message: "Usuário atualizado com sucesso.", updatedUser });
    } catch (error) {

        console.log(error);
        
        const statusCode = error.status || 500;
        const message = error.message || "Erro no servidor.";

        return res.status(statusCode).send(message);
    }
}

const deleteUser = async (req, res) => {

    try {

        const ID = req.params.id;

        const deletedUser = await services.deleteUser(ID);

        if (deletedUser) {

            return res.status(204).send();
        } else {


        }
    } catch (error) {

        console.log(error);
        
        const statusCode = error.status || 500;
        const message = error.message || "Erro no servidor.";

        return res.status(statusCode).send(message);
    }
}

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}