import { Module } from '@nestjs/common';
import { PopulatorService } from './populator.service';
import { PopulatorController } from './populator.controller';

@Module({
  controllers: [PopulatorController],
  providers: [PopulatorService]
})
export class PopulatorModule {}
