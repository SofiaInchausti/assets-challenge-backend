import {
    BaseEntity,
    Column,
    Entity,
    PrimaryColumn,
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
    @PrimaryColumn()
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
  