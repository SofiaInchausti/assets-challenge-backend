import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Asset } from "./Asset";

@Entity()
export class Developer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column({ default: true })
  active: boolean;

  // Relation with Asset
  @OneToMany(() => Asset, (asset) => asset.developer)
  assets: Asset[];
}
