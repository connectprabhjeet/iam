import { InjectionToken } from '@angular/core';

/**
 * Component data provider key
 * Use this key when passing data to component from server
 */
export const COMPONENT_DATA: InjectionToken<string> = new InjectionToken(
  'COMPONENT_DATA'
);

/**
 * API base
 */
export const API_BASE = '/_';

/**
 * Available services
 */
export enum Service {
  MY_APP = 'MY_APP',
}
