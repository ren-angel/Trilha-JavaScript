import sequelize from './config/database.js';
import usuario from './models/usuario.js';

(async () => {

    try {

        // Sincronizar o banco de dados (cria tabelas se não existirem). O método `sync({ force: true })` recria as tabelas sempre que o código é executado. Remova `force: true` para evitar isso.
        await sequelize.sync({ force: true });
        console.log('Banco de dados sincronizado!');

        // Criar um novo usuário
        const novoUsuario = await usuario.create({
            nome: 'João Silva',
            idade: 20,
        });
        console.log('Usuário criado:', novoUsuario.toJSON());

        // Buscar todos os usuários
        const usuarios = await usuario.findAll();
        console.log('Lista de usuários:', usuarios.map(usuario => usuario.toJSON()));

        // Atualizar um usuário
        const usuarioAtualizado = await usuario.update({ nome: 'João Souza' }, {
            where: { usuario_id: novoUsuario.usuario_id },
        });
        console.log('Usuário atualizado', usuarioAtualizado.toJSON());

        // Excluir um usuário
        await usuario.destroy({
            where: { usuario_id: novoUsuario.usuario_id },
        });
        console.log('Usuário excluído');
    } catch (error) {

        console.error('Erro ao usar o Sequelize:', error);
    } finally {

        // Desconecta do banco
        await sequelize.close();
    }
})();