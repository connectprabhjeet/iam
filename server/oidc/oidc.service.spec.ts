import { Test, TestingModule } from '@nestjs/testing';

import { OIDCService } from './oidc.service';

describe('OIDCService', () => {
  let service: OIDCService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OIDCService],
    }).compile();

    service = module.get<OIDCService>(OIDCService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
