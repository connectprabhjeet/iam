import { Request, Response } from 'express';

import { APP_BASE_HREF } from '@angular/common';
import { COMPONENT_DATA } from './renderer.constants';
import { indexHTML } from './renderer.utils';

describe('Sign in (Server)', () => {
  let mReq: Partial<Request>;
  let mRes: Partial<Response>;

  beforeEach(() => {
    // mock the request and response
    mReq = {
      baseUrl: '/',
    };
    mRes = {
      render: jest.fn(),
    };
  });

  test('No component data', () => {
    indexHTML(mReq as Request, mRes as Response);
    expect(mRes.render).toBeCalledTimes(1);
    expect(mRes.render).toBeCalledWith('index', {
      req: mReq,
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: mReq.baseUrl,
        },
      ],
    });
  });

  test('With component data', () => {
    indexHTML<string>(mReq as Request, mRes as Response, 'a sample value');
    expect(mRes.render).toBeCalledTimes(1);
    expect(mRes.render).toBeCalledWith('index', {
      req: mReq,
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: mReq.baseUrl,
        },
        {
          provide: COMPONENT_DATA,
          useValue: 'a sample value',
        },
      ],
    });
  });
});
