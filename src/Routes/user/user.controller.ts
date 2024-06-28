import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  Put,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateAddressDto } from '../address/dto/update-address.dto';
import { CreatePetDto } from '../pet/dto/create-pet.dto';
import { UpdatePetDto } from '../pet/dto/update-pet.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-pet')
  createPet(@Body() pet: CreatePetDto) {
    return this.userService.createPet(pet);
  }

  @Put('update-pet/:id')
  updatePet(@Param('id') id: string, @Body() pet: UpdatePetDto) {
    return this.userService.updatePet(+id, pet);
  }

  @Get('find-all-pets/:id')
  getAllPets(@Param('id') id: string) {
    return this.userService.findAllPetsUser(+id);
  }

  @Delete('remove-pet/:id')
  removePet(@Param('id') id: string) {
    return this.userService.removePet(+id);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Put('update-user/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Put('address/:id')
  updateUserAddress(@Param('id') id: string, @Body() update: UpdateAddressDto) {
    return this.userService.updateAddressUser(+id, update);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
