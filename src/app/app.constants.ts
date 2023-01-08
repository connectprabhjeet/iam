import { makeStateKey } from '@angular/platform-browser';

/**
 * State key for state transfer
 * To be used for passing state to any component from server
 */
export const COMPONENT_STATE = <T>() => makeStateKey<T>('COMPONENT_DATA');