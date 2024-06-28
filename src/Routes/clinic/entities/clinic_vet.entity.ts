import { Entity, Index, ManyToOne } from 'typeorm';
import { EntityBase } from '../../../entities/entity-base.entity';
import { Vet } from '../../vet/entities/vet.entity';
import { Clinic } from '../../clinic/entities/clinic.entity';

@Entity('Clinic_Vet')
@Index(['Vet', 'Clinic'], { unique: true })
export class ClinicVet extends EntityBase {
  @ManyToOne(() => Vet, (Vet) => Vet.ClinicVet)
  Vet: Vet;

  @ManyToOne(() => Clinic, (Clinic) => Clinic.ClinicVet)
  Clinic: Clinic;
}
