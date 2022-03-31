import { Injectable } from '@nestjs/common';
import { CreatePopulatorDto } from './dto/create-populator.dto';
import { UpdatePopulatorDto } from './dto/update-populator.dto';

@Injectable()
export class PopulatorService {
  create(createPopulatorDto: CreatePopulatorDto) {
    return 'This action adds a new populator';
  }

  findAll() {
    return `This action returns all populator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} populator`;
  }

  update(id: number, updatePopulatorDto: UpdatePopulatorDto) {
    return `This action updates a #${id} populator`;
  }

  remove(id: number) {
    return `This action removes a #${id} populator`;
  }
}
