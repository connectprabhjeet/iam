import { InjectionToken } from '@angular/core';

/**
 * For objects
 */
export interface Object<T> {
  [key: string]: T | Object<T> | Array<T>;
}

/**
 * Renderer provider
 */
export interface RendererProvider {
  provide: string | InjectionToken<string>;
  useValue: any;
}
