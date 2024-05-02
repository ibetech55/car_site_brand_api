import "reflect-metadata";
import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Models } from "./models";

@Entity("makes")
class Makes {
  @PrimaryColumn()
  _id?: string;

  @Column()
  make_name: string;

  @Column()
  origin: string;

  @Column()
  make_logo?: string;

  @Column()
  active: boolean;

  @Column()
  year_founded: number;

  @Column()
  company: string;

  @OneToMany(() => Models, models => models.makes)
  @JoinColumn({ name: 'make_id' })
  models?: Models[];

  @CreateDateColumn()
  created_at?: Date | string;


  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;

  constructor() {
    if (!this._id) {
      this._id = uuid();
    }
  }
}

export { Makes };
