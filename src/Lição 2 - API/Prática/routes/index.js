import express from 'express';
import controller from '../controller/index.js'

const router = express.Router();

router.get('/getAll', controller.getAllUsers);

router.get('/get/:id', controller.getUser);

router.post('/create', controller.createUser);

router.put('/update', controller.updateUser);

router.delete('/delete/:id', controller.deleteUser);

export default router;