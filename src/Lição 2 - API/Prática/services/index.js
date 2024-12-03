import { PrismaClient } from '@prisma/client'; 
import dotenv from 'dotenv'

dotenv.config({ path: './.env' });

const prisma = new PrismaClient();

const getAllUsers = async () => {

    try {

        const users = await prisma.user.findMany();

        if (users.length === 0) {

            return { message: 'Nenhum usuário encontrado.' };
        }

        return users;
    } catch (error) {

        console.error(error);
        throw new Error('Um erro ocorreu ao buscar os usuários.');
    }
}

const getUser = async (ID) => {

    ID = parseInt(ID);

    try {

        const user = await prisma.user.findUnique({
            where: { user_id: ID },
        });

        return user;
    } catch (error) {

        console.log(error);
        throw new Error('Um erro ocorreu ao buscar o usuário.');
    }
}

const createUser = async ({ name, description }) => {

    try {

        const newUser = await prisma.user.create({
            data: {
                name: name,
                description: description
            }
        });

        return newUser;
    } catch (error) {

        console.log(error);
        throw new Error('Um erro ocorreu ao criar o usuário.');
    }
}

const updateUser = async ({ ID, name, description }) => {

    ID = parseInt(ID);

    const fields = {};

    if (name) {

        fields.name = name;
    }

    if (description) {

        fields.description = description;
    }

    try {

        const updatedUser = await prisma.user.update({
            where: { user_id: ID },
            data : fields,
        });

        return updatedUser;
    } catch (error) {

        console.log(error);

        if (error.code === 'P2025') {

            throw ({ status: 404, message: `Usuário de ID ${ID} não encontrado.` });
        }

        throw ({ status: 500, message: 'Um erro ocorreu ao atualizar o usuário.' });
    }
}

const deleteUser = async (ID) => {

    ID = parseInt(ID);

    try {

        await prisma.user.delete({
            where: { user_id: ID },
        });

        return true;
    } catch (error) {

        console.log(error);

        if (error.code === 'P2025') {

            throw ({ status: 404, message: `Usuário de ID ${ID} não encontrado.` });
        }

        throw ({ status: 500, message: 'Um erro ocorreu ao remover o usuário.' });
    }
}

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};