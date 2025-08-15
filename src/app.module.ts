import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipAdriftController } from './ship-adrift/shipAdrift.controller';
import { TestController } from './generateTest/test.controller';
import { GenerateTestService } from './generate-test/generate-test.service';
import { ShipAdriftService } from './ship-adrift/ship-adrift.service';

@Module({
  imports: [],
  controllers: [AppController, ShipAdriftController, TestController],
  providers: [AppService, GenerateTestService, ShipAdriftService],
})
export class AppModule {}
