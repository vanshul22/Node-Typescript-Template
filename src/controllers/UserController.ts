
// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  static async getUsers(req: Request, res: Response) {
    const users = await UserService.getUsers();
    res.send(users);
  }

  static async getUser(req: Request, res: Response) {
    const { id } = req.params;
    const user = await UserService.getUser(id);
    res.send(user);
  }

  static async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const user = await UserService.createUser(name, email);
    res.send(user);
  }

  static async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await UserService.updateUser(id, name, email);
    res.send(user);
  }

  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await UserService.deleteUser(id);
    res.sendStatus(204);
  }
}
