import { Controller, Get } from '@nestjs/common';
import { ShipAdriftService } from './ship-adrift.service';
import type { StatusResponse } from './interfaces/StatusResponse';
import { switchToUnderscore } from '../utils/strings-utils';

@Controller()
export class ShipAdriftController {
  constructor(private shipAdriftService: ShipAdriftService) {}

  @Get('status')
  getStatus(): StatusResponse {
    const damagedSystem = this.shipAdriftService.getDamagedSystem();
    const damaged_system = switchToUnderscore(damagedSystem);

    return {
      damaged_system,
    };
  }
}
