import { Request, Response } from "express-serve-static-core";
import { Developer } from "../entities/Developer";
import { Asset } from "../entities/Asset";
import { In } from "typeorm";

export const createDeveloper = async (req: Request, res: Response) => {
  try {
    const { fullname, assets, active } = req.body;
    if (!assets || !Array.isArray(assets)) {
      return res.status(400).json({ message: "Assets must be an array." });
    }
    const existingAssets = await Asset.find({
      where: { id: In(req.body.assets) },
    });
    if (existingAssets.length !== assets.length) {
      return res
        .status(400)
        .json({ message: "One or more asset IDs are invalid." });
    }
    const developer = new Developer();
    developer.fullname = fullname;
    developer.assets = existingAssets;
    developer.active = active;
    await developer.save();
    return res.json(developer);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getDevelopers = async (req: Request, res: Response) => {
  try {
    const developers = await Developer.find({ relations: ["assets"] });
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
    const developer = await Developer.findOne({
      where: { id: parseInt(id) },
      relations: ["assets"],
    });
    if (!developer) {
      return res.status(404).json({ message: "Developer not found" });
    }
    developer.fullname = req.body.fullname;
    developer.active = req.body.active;
    if (req.body.assets && Array.isArray(req.body.assets)) {
      const existingAssets = await Asset.findByIds(req.body.assets);
      if (existingAssets.length !== req.body.assets.length) {
        return res
          .status(400)
          .json({ message: "One or more asset IDs are invalid." });
      }
      developer.assets = existingAssets;
    } else {
      developer.assets = [];
    }
    await developer.save();
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
    const developer = await Developer.findOneBy({ id: parseInt(id) });
    if (!developer) {
      return res.status(404).json({ message: "Developer not found" });
    }
    developer.assets = [];
    await developer.save();

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
    const developer = await Developer.findOne({
      where: { id: parseInt(req.params.id) },
      relations: ["assets"],
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
