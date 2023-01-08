import { All, Controller, Get, Req, Res } from '@nestjs/common';
import { OIDCService } from './oidc.service';
import { Request, Response } from 'express';
import { render } from 'server/utils/renderer/renderer.utils';

@Controller()
export class OIDCController {
  constructor(private oidc: OIDCService) {}

  @All('/*')
  public mountedOidc(@Req() req: Request, @Res() res: Response): void {
    return this.oidc.callback(req, res);
  }
}
