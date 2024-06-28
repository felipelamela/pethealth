import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}
  create(createPetDto: CreatePetDto) {
    return this.petRepository.save(createPetDto);
  }

  updateForUser(pet: Pet) {
    return this.petRepository.save(pet);
  }

  findOne(id: number) {
    return this.petRepository.findOne({ where: { Id: id } });
  }

  remove(id: number) {
    return this.petRepository.delete(id);
  }
}
