import { connect } from 'react-redux'
import { State } from '../../core/state'
import { Counter } from '../components/Counter'
import { up, down } from '../../core/actions/count'

export const CounterContainer = connect(
    (state: State) => ({
        count: state.count
    }),
    (dispatch: any) => ({
        plus: () => dispatch(up()),
        minus: () => dispatch(down()),
    })
)(Counter)
