import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
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
  }
  