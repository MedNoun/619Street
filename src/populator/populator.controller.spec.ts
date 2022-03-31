import { Test, TestingModule } from '@nestjs/testing';
import { PopulatorController } from './populator.controller';
import { PopulatorService } from './populator.service';

describe('PopulatorController', () => {
  let controller: PopulatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PopulatorController],
      providers: [PopulatorService],
    }).compile();

    controller = module.get<PopulatorController>(PopulatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
