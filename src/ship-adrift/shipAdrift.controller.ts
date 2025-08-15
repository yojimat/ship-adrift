import { Controller, Get, Header, HttpCode } from '@nestjs/common';
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

  @Get('repair-bay')
  @Header('Content-Type', 'text/html')
  getRepairPage(): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Repair</title>
        </head>
        <body>
          <div class="anchor-point">${this.shipAdriftService.getDamagedSystemCode()}</div>
        </body>
      </html>`;
  }

  @Get('teapot')
  @HttpCode(418)
  getTeapotPage() {}
}
