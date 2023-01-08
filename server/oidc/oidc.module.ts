import { Global, Module } from '@nestjs/common';

import { OIDCController } from './oidc.controller';
import { OIDCService } from './oidc.service';

@Global()
@Module({
  controllers: [OIDCController],
  providers: [OIDCService],
})
export class OIDCModule {}
