import { Test, TestingModule } from '@nestjs/testing';
import { ShipAdriftController } from './shipAdrift.controller';
import { ShipAdriftService } from './ship-adrift.service';
import { StatusResponse } from './interfaces/StatusResponse';

describe('ShipAdriftController', () => {
  let shipAdriftController: ShipAdriftController;
  let shipAdriftService: ShipAdriftService;

  beforeEach(async () => {
    const shipAdriftModule: TestingModule = await Test.createTestingModule({
      controllers: [ShipAdriftController],
      providers: [ShipAdriftService],
    }).compile();

    shipAdriftController =
      shipAdriftModule.get<ShipAdriftController>(ShipAdriftController);
    shipAdriftService =
      shipAdriftModule.get<ShipAdriftService>(ShipAdriftService);
  });

  describe('root', () => {
    it('should return the status of the ship', () => {
      jest
        .spyOn(shipAdriftService, 'getDamagedSystem')
        .mockReturnValue('Engines');
      const response = shipAdriftController.getStatus();

      expect(JSON.stringify(response)).toBe(
        JSON.stringify({
          damaged_system: 'engines',
        } as StatusResponse),
      );
    });

    it('should return the strings like LifeSupport as life_support ', () => {
      jest
        .spyOn(shipAdriftService, 'getDamagedSystem')
        .mockReturnValue('LifeSupport');

      const response = shipAdriftController.getStatus();

      expect(JSON.stringify(response)).toBe(
        JSON.stringify({
          damaged_system: 'life_support',
        } as StatusResponse),
      );
    });
  });
});
