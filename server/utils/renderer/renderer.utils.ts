import { Request, Response } from 'express';

import { APP_BASE_HREF } from '@angular/common';
import { COMPONENT_DATA } from './renderer.constants';
import { RendererProvider } from './renderer.types';
import { existsSync } from 'fs';
import { join } from 'path';

export const distFolder = join(process.cwd(), 'dist/idp/browser');
export const indexHtmlFile = existsSync(join(distFolder, 'index.original.html'))
  ? 'index.original.html'
  : 'index';

/**
 * Renders index.html file also handles routing internally
 * @param componentData data that needs to be passed to component rendered corresponding to route
 */
export const render = <T>(
  req: Request,
  res: Response, // express response
  componentData?: T
) => {
  const providers: Array<RendererProvider> = [
    { provide: APP_BASE_HREF, useValue: req.baseUrl },
  ];
  if (componentData)
    providers.push({
      provide: COMPONENT_DATA,
      useValue: componentData,
    });
  res.render(indexHtmlFile, {
    req,
    providers,
  });
};
