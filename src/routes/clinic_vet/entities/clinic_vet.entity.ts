import { Entity, Index, ManyToOne } from 'typeorm';
import { Vet } from 'src/routes/vet/entities/vet.entity';
import { Clinic } from 'src/routes/clinic/entities/clinic.entity';
import { EntityBase } from 'src/entities/entity-base.entity';

// @Entity('Clinic_Vet')
// @Index(['Vet', 'Clinic'], { unique: true })
export class ClinicVet extends EntityBase {
  @ManyToOne(() => Vet, (Vet) => Vet.ClinicVet)
  Vet: Vet;

  @ManyToOne(() => Clinic, (Clinic) => Clinic.ClinicVet)
  Clinic: Clinic;
}
