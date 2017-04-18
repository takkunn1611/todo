import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

interface State {
    count: number
}

interface Action {
    type: string
    paylod?: any
}

const count = (count: number, action: Action) => {
    switch (action.type) {
        case 'COUNT:UP':
            return count + 1;
        case 'COUNT:DOWN':
            return count - 1;
        default:
            return count;
    }
}

const initialState: State = { count: 0 };
const store = createStore((state: State = initialState, action: Action) => {
    return {
        count: count(state.count, action)
    }
});

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
