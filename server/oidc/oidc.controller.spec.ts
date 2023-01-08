import { Test, TestingModule } from '@nestjs/testing';

import { OIDCController } from './oidc.controller';

describe('OIDCController', () => {
  let controller: OIDCController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OIDCController],
    }).compile();

    controller = module.get<OIDCController>(OIDCController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
