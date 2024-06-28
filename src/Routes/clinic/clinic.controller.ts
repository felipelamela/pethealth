import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import FindUserDto from './dto/find-user.dto';

@Controller('clinic')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) {}

  @Post('create-user')
  createUser(@Body() create: CreateUserDto) {
    return this.clinicService.createUser(create);
  }
  @Get('find-user')
  findUser(@Body() findUser: FindUserDto) {
    return this.clinicService.findUser(findUser);
  }
}
