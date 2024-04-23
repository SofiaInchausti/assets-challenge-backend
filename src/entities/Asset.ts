import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Developer } from "./Developer";

export enum AssetType {
  Laptop = "laptop",
  Keyboard = "keyboard",
  Mouse = "mouse",
  Headset = "headset",
  Monitor = "monitor",
}

@Entity()
export class Asset extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column({
    type: "enum",
    enum: AssetType,
  })
  type: AssetType;

  // Relation with developers
  @ManyToOne(() => Developer, (developer) => developer.assets)
  @JoinColumn({ name: "developer_id" })
  developer: Developer;
}
