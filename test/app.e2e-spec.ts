import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { StatusResponse } from 'src/ship-adrift/interfaces/StatusResponse';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/status (GET)', () => {
    return request(app.getHttpServer()).get('/status').expect(200);
  });

  it('/repair-bay (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/status');
    const damagedSystem: string = (response.body as StatusResponse)
      .damaged_system;

    const htmlPage = `<!DOCTYPE html><html><head><title>Repair</title></head><body><div class="anchor-point">${damagedSystem}</div></body></html>`;

    return request(app.getHttpServer())
      .get('/repair-bay')
      .expect(200)
      .expect(htmlPage);
  });

  afterAll(async () => {
    await app.close();
  });
});
