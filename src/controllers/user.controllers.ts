import { Request, Response } from "express-serve-static-core";
import { User } from "../entities/User";
import jwt from 'jsonwebtoken';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password, active } = req.body;

    const user = new User();
    user.username = username;
    user.password = password;
    user.active = active;

    await user.save();
    res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findOneBy({ id: parseInt(req.params.id) });
    if (!user) return res.status(404).json({ message: "User not found" });
    await User.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.delete({ id: parseInt(id) });
    if (result.affected === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneBy({ id: parseInt(req.params.id) });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};


const generateToken = (userId: string) => {
  return jwt.sign({ userId }, 'clave_secreta', { expiresIn: '1h' });
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const passwordMatch = password === user.password;
    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
    const token = generateToken('user.id');
    return res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
