import { ShipAdriftService } from './ship-adrift.service';
import { System } from 'models/System';

describe('ShipAdriftService', () => {
  let service: ShipAdriftService;
  const system: System = {
    Navigation: 'NAV-01',
    Communications: 'COM-02',
    LifeSupport: 'LIFE-03',
    Engines: 'ENG-04',
    DeflectorShield: 'SHLD-05',
  } as System;

  beforeEach(() => {
    service = new ShipAdriftService(system);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a damaged system', () => {
    const damagedSystem = service.getDamagedSystem();
    const systemPropKeys = Object.keys(system) as (keyof System)[];

    expect(damagedSystem).toBeDefined();
    expect(systemPropKeys).toContain(damagedSystem);
  });

  it('should return the code of the damaged system', () => {
    const damagedSystem = service.getDamagedSystem();
    const code = service.getDamagedSystemCode();

    expect(code).toBeDefined();
    expect(code).toBe(system[damagedSystem as keyof System]);
  });
});
