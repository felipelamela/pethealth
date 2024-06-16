import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class EntityBase extends BaseEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ name: 'Created_At', default: () => 'CURRENT_TIMESTAMP' })
  Create_At: Date;

  @Column({ name: 'Updated_At', default: () => 'CURRENT_TIMESTAMP' })
  Update_At: Date;
}
