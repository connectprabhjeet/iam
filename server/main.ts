import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // disable x-powered-by
  app.getHttpAdapter().getInstance().disable('x-powered-by');
  // process.env['PORT'] holds randomized port until explictly defined in production
  await app.listen(process.env['PORT'] || 3000);
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap().catch(err => console.error(err));
}

