import { Action } from 'redux';
import { initialState } from '../state'
import { UP, DOWN } from '../actions/count'

export const count = (count: number = initialState.count, action: Action) => {
    switch (action.type) {
        case UP.type:
            return count + 1
        case DOWN.type:
            return count - 1
        default:
            return count
    }
}