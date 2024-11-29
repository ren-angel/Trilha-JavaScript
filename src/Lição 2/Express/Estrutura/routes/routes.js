// Em 'routes', criamos os endpoints de nossa API
import express from "express";
import controllers from '../controllers/controllers.js';

// Criamos o roteador da nossa API, nos permitindo definir os seus endpoints e métodos apropriados
const router = express.Router();

// Criamos os endpoints
router.get('/', controllers.HelloWorld);
router.post('/post', controllers.postMessage);

export default router;