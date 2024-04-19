import { Request, Response } from "express-serve-static-core";
import { Developer } from "../entities/Developer";

export const createDeveloper = async (req: Request, res: Response) => {
  try {
    const { fullname, assets } = req.body;

    const developer = new Developer();
    developer.fullname = fullname;
    developer.assets = assets;

    await developer.save();
    res.json(developer);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getDevelopers = async (req: Request, res: Response) => {
  try {
    const developers = await Developer.find();
    res.json(developers);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateDeveloper = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const developer = await Developer.findOneBy({
      id: parseInt(req.params.id),
    });
    if (!developer)
      return res.status(404).json({ message: "Developer not found" });
    await Developer.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteDeveloper = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Developer.delete({ id: parseInt(id) });
    if (result.affected === 0) {
      return res.status(404).json({ message: "Developer not found" });
    }
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getDeveloper = async (req: Request, res: Response) => {
  try {
    const developer = await Developer.findOneBy({
      id: parseInt(req.params.id),
    });
    if (!developer) {
      return res.status(404).json({ message: "Developer not found" });
    }
    return res.json(developer);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
