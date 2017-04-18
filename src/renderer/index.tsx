import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { connect, Provider } from 'react-redux'

interface State {
    count: number
}

interface Action {
    type: string
    payload?: any
}

const initialState: State = { count: 0 }

const count = (count: number = initialState.count, action: Action) => {
    switch (action.type) {
        case 'COUNT:UP':
            return count + 1
        case 'COUNT:DOWN':
            return count - 1
        default:
            return count
    }
}

const store = createStore(combineReducers({ count }))

const countUp = () => ({ type: 'COUNT:UP' })
const countDown = () => ({ type: 'COUNT:DOWN' })

const Counter = (props: any) => (
    <div>
        <div>count: { props.count }</div>
        <button onClick={ props.plus }>+</button>
        <button onClick={ props.minus }>-</button>
    </div>
)

const CounterContainer = connect(
    (state: State) => ({
        count: state.count
    }),
    (dispatch: any) => ({
        plus: () => dispatch(countUp()),
        minus: () => dispatch(countDown()),
    })
)(Counter)

const Main = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
)

ReactDOM.render(<Main />, document.getElementById('main'))
