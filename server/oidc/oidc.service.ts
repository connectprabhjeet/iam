import Provider, { Configuration } from 'oidc-provider';

import { Injectable } from '@nestjs/common';

@Injectable()
export class OIDCService {
  /**
   * Callback function of OIDC
   */
  get callback() {
    return this.instance.callback();
  }

  /**
   * OIDC configuration
   */
  private get configuration(): Configuration {
    return {
      clients: [
        {
          client_id: 'foo',
          client_secret: 'bar',
          redirect_uris: ['http://localhost:3002/cb'],
        },
      ],
    };
  }

  readonly instance = new Provider(
    `http://localhost:${process.env['PORT']}`,
    this.configuration
  );
}
