import { PartialType } from '@nestjs/mapped-types';
import { CreatePopulatorDto } from './create-populator.dto';

export class UpdatePopulatorDto extends PartialType(CreatePopulatorDto) {}
