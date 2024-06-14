import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class EntityBase extends BaseEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ name: 'Create_At', default: () => 'CURRENT_TIMESTAMP' })
  Create_At: Date;

  @Column({ name: 'Update_at', default: () => 'CURRENT_TIMESTAMP' })
  Update_At: Date;
}
