import { Injectable, Optional } from '@nestjs/common';
import type { System } from 'models/System';

export const systemDefault: System = {
  Navigation: 'NAV-01',
  Communications: 'COM-02',
  LifeSupport: 'LIFE-03',
  Engines: 'ENG-04',
  DeflectorShield: 'SHLD-05',
};

@Injectable()
export class ShipAdriftService {
  constructor(@Optional() private readonly system: System = systemDefault) {}

  private damagedSystemCode: string = 'No damaged System';

  getDamagedSystem(): string {
    const systemPropKeys = Object.keys(this.system) as (keyof System)[];
    const randomIndex = Math.floor(Math.random() * systemPropKeys.length);
    const randomKey = systemPropKeys[randomIndex];
    this.damagedSystemCode = this.system[randomKey];
    return randomKey as string;
  }

  getDamagedSystemCode(): string {
    return this.damagedSystemCode;
  }
}
