// src/routes/UserRoutes.ts
import express from 'express';
import { UserController } from '../controllers/UserController';

export const UserRoutes = express.Router();

UserRoutes.get('/', UserController.getUsers);
UserRoutes.get('/:id', UserController.getUser);
UserRoutes.post('/', UserController.createUser);
UserRoutes.put('/:id', UserController.updateUser);
UserRoutes.delete('/:id', UserController.deleteUser);