import { PrismaClient } from '@prisma/client';

// Cria uma instância do Prisma
const prisma = new PrismaClient();

(async () => {

  try {

    // Criar um novo usuário
    const novoUsuario = await prisma.user.create({
      data: {
        nome: 'João Silva',
        idade: 29,
      },
    });
    console.log('Usuário criado:', novoUsuario);

    // Buscar todos os usuários
    const usuarios = await prisma.user.findMany();
    console.log('Lista de usuários:', usuarios);

    // Atualizar um usuário
    const usuarioAtualizado = await prisma.user.update({
      where: { usuario_id: novoUsuario.usuario_id },
      data: { nome: 'João Souza' },
    });
    console.log('Usuário atualizado:', usuarioAtualizado);

    // Excluir um usuário
    await prisma.user.delete({
      where: { usuario_id: novoUsuario.usuario_id },
    });
    console.log('Usuário excluído');
  } catch (error) {

    console.error('Erro ao usar o Prisma:', error);
  } finally {
    
    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  }
})();
