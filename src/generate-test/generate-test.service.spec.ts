import { Test, TestingModule } from '@nestjs/testing';
import { GenerateTestService } from './generate-test.service';

describe('GenerateTestService', () => {
  let service: GenerateTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateTestService],
    }).compile();

    service = module.get<GenerateTestService>(GenerateTestService);
  });

  it.skip('should be defined', () => {
    expect(service).toBeDefined();
  });
});
