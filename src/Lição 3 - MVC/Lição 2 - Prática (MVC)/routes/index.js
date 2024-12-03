import express from 'express';
import controller from '../controller/index.js'

const router = express.Router();

// Novas rotas GET foram adicionadas para redirecionar as Views de criar, atualizar e excluir
router.get('/getAll', controller.getAllUsers);

router.get('/get/:id', controller.getUser);

router.get('/create', (req, res) => res.render('create-user'));
router.post('/create', controller.createUser);

router.get('/update/:id', (req, res) => res.render('update-user', { user_id: req.params.id }));
router.put('/update/:id', controller.updateUser);

router.get('/delete/:id', (req, res) => res.render('delete-user', { user_id: req.params.id }));
router.delete('/delete/:id', controller.deleteUser);

export default router;