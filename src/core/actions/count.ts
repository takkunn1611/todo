import { Action } from 'redux';

export const UP: Action = { type: 'count/UP' };
export const DOWN: Action = { type: 'count/DOWN' };

export const up = () => (UP)
export const down = () => (DOWN)
