import { Test, TestingModule } from '@nestjs/testing';
import { ShipAdriftService } from './ship-adrift.service';
import { System } from 'models/System';

describe('ShipAdriftService', () => {
  let service: ShipAdriftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShipAdriftService],
    }).compile();

    service = module.get<ShipAdriftService>(ShipAdriftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a damaged system', () => {
    const damagedSystem = service.getDamagedSystem();
    const system: System = {
      Navigation: 'NAV-01',
      Communications: 'COM-02',
      LifeSupport: 'LIFE-03',
      Engines: 'ENG-04',
      DeflectorShield: 'SHLD-05',
    } as System;
    const systemPropKeys = Object.keys(system).map((key) => key);

    expect(damagedSystem).toBeDefined();
    expect(systemPropKeys).toContain(damagedSystem);
  });
});
