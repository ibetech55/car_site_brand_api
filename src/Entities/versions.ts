import "reflect-metadata";
import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Models } from "./models";
import { Makes } from "./makes";
import { IGetCarList } from "../Data/Make/GetCarListDto";
import { IGetModel } from "../Data/Model/GetModelDtos";

@Entity("versions")
class Versions {
  @PrimaryColumn()
  _id?: string;

  @Column()
  version_name: string;

  @Column()
  model_id: string;

  @Column()
  description: string;

  @Column()
  active: boolean;

  @ManyToOne(() => Models, models => models.versions)
  @JoinColumn({ name: 'model_id' })
  models?: Models;

  @ManyToOne(() => Makes, makes => makes.models)
  @JoinColumn({ name: 'model_id' })
  makes?: Makes;

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

export { Versions };
