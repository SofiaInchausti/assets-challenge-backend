import { Request, Response } from "express-serve-static-core";
import { Asset } from "../entities/Asset";

export const createAsset = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const { brand, model, type } = req.body;

    const asset = new Asset();
    asset.brand = brand;
    asset.model = model;
    asset.type = type;

    await asset.save();
    res.json(asset);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getAssets = async (req: Request, res: Response) => {
  console.log(9);
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateAsset = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const asset = await Asset.findOneBy({ id: parseInt(req.params.id) });
    if (!asset) return res.status(404).json({ message: "asset not found" });
    await Asset.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteAsset = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Asset.delete({ id: parseInt(id) });
    if (result.affected === 0) {
      return res.status(404).json({ message: "asset not found" });
    }
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getAsset = async (req: Request, res: Response) => {
  try {
    const asset = await Asset.findOneBy({ id: parseInt(req.params.id) });
    if (!asset) {
      return res.status(404).json({ message: "asset not found" });
    }
    return res.json(asset);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
