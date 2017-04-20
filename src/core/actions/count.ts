import { Action } from './action'

export const COUNT_UP: Action = { type: 'COUNT:UP' };
export const COUNT_DOWN: Action = { type: 'COUNT:DOWN' };

export const countUp = () => (COUNT_UP)
export const countDown = () => (COUNT_DOWN)
