import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Developer extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  active: boolean;
}
