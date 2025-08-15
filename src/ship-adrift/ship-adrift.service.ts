import { Injectable } from '@nestjs/common';
import { System } from 'models/System';

@Injectable()
export class ShipAdriftService {
  private readonly system: System = {
    Navigation: 'NAV-01',
    Communications: 'COM-02',
    LifeSupport: 'LIFE-03',
    Engines: 'ENG-04',
    DeflectorShield: 'SHLD-05',
  } as System;

  getDamagedSystem(): string {
    const systemPropKeys = Object.keys(this.system).map((key) => key);
    const randomIndex = Math.floor(Math.random() * systemPropKeys.length);
    return systemPropKeys[randomIndex];
  }
}
