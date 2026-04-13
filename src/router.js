import { Router } from "express";

import userController from './controller/user.controller.js';

export const router = Router();

router.get('/users', userController.findAll);
router.get('/users/:id', userController.findById)