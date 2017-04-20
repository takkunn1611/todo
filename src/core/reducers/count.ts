import { initialState } from '../state'
import { Action } from '../actions/action'
import { COUNT_UP, COUNT_DOWN } from '../actions/count'

export const count = (count: number = initialState.count, action: Action) => {
    switch (action.type) {
        case COUNT_UP.type:
            return count + 1
        case COUNT_DOWN.type:
            return count - 1
        default:
            return count
    }
}