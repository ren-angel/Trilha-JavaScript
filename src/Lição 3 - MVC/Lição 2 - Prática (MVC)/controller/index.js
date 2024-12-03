import services from '../services/index.js';

// Como estarei usando EJS para Views, em vez de enviar os dados com send(), estarei renderizando eles com render e redirecionando com redirect()
const getAllUsers = async (req, res) => {

    try {

        const users = await services.getAllUsers();

        if (users.length === 0) {

            // Primeiro, passe o nome do arquivo EJS, depois o seu conteúdo
            return res.render('no-users', { message: 'Nenhum usuário encontrado.' });
        }

        return res.render('users', { users });
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

            return res.render('no-user', { message: 'Nenhum usuário encontrado.' });
        }

        return res.render('user', { user });
    } catch (error) {

        console.log(error);
        return res.status(500).send("Erro no servidor.");
    }
}

const createUser = async (req, res) => {

    try {

        const { name, description } = req.body;

        await services.createUser({ name, description });

        // Voltará para a página inicial
        return res.redirect("/getAll");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro no servidor.");
    }
}

const updateUser = async (req, res) => {

    try {

        const ID = req.params.id;

        const { name, description } = req.body;

        await services.updateUser({ ID, name, description });

        return res.redirect("/getAll");
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

            return res.redirect("/getAll");
        } else {

            return res.render('no-user', { message: 'Usuário não encontrado para deletar.' });
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
