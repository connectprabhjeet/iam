import { AngularUniversalModule } from '@nestjs/ng-universal';
import { AppServerModule } from '../src/main.server';
import { Module } from '@nestjs/common';
import { OIDCController } from './oidc/oidc.controller';
import { OIDCModule } from './oidc/oidc.module';
import { OIDCService } from './oidc/oidc.service';
import { join } from 'path';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/idp/browser'),
    }),
    OIDCModule,
  ],
})
export class AppModule {}
