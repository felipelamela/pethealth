import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  create(rep) {
    this.roleRepository.save(rep);
  }

  findAll() {
    return `This action returns all roles`;
  }

  findOne(id: number) {
    return this.roleRepository.findOne({ where: { Id: id } });
  }
}
