import { Controller, Get, Header, HttpCode, Post, Query } from '@nestjs/common';
import { ShipAdriftService } from './ship-adrift.service';
import type {
  PhaseResponse,
  StatusResponse,
} from './interfaces/StatusResponse';
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

  @Post('teapot')
  @HttpCode(418)
  getTeapotPage() {}

  @Get('phase-change-diagram')
  getPhaseChangeDiagram(@Query('pressure') pressure: number): PhaseResponse {
    console.log(pressure);

    return {
      specific_volume_liquid: 0.0035,
      specific_volume_vapor: 0.0035,
    };
  }
}
