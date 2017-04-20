import { connect } from 'react-redux'
import { State } from '../../../core/state'
import { Counter } from '../components/Counter'
import { countUp, countDown } from '../../../core/actions/count'

export const CounterContainer = connect(
    (state: State) => ({
        count: state.count
    }),
    (dispatch: any) => ({
        plus: () => dispatch(countUp()),
        minus: () => dispatch(countDown()),
    })
)(Counter)
