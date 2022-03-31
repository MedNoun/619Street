import { Test, TestingModule } from '@nestjs/testing';
import { PopulatorService } from './populator.service';

describe('PopulatorService', () => {
  let service: PopulatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PopulatorService],
    }).compile();

    service = module.get<PopulatorService>(PopulatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
