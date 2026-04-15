import { Router } from "express";

import userController from './controller/user.controller.js';

export const router = Router();

router.get('/', userController.findAll);
router.get('/calc/:id/:disciplina', userController.calcMed);
router.get('/find/:id', userController.findById);
router.post('/create', userController.createUser);