import "reflect-metadata";
import { v4 as uuid } from "uuid";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("model_categories")
class ModelCategories {
  @PrimaryColumn()
  _id?: string;

  @Column()
  type: string;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at?: Date;

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

export { ModelCategories };
