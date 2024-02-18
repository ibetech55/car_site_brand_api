import "reflect-metadata";
import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Makes } from "./makes";
import { Versions } from "./versions";
import { versions } from "process";

@Entity("models")
class Models {
  @PrimaryColumn()
  _id?: string;

  @Column()
  model_name: string;

  @Column()
  make_id: string;

  @Column()
  active: boolean;

  // @Column()
  // body_type: string;

  @ManyToOne(type => Makes, makes => makes)
  @JoinColumn({ name: 'make_id' })
  makes?: Makes

  @OneToMany(() => Versions, version => version.models)
  @JoinColumn({ name: 'model_id' })
  versions?: Versions[];

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

export { Models };
