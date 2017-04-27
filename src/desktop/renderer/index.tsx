import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../../core/reducers'
import CounterContainer from './containers/CounterContainer'

const store = createStore(reducer)

const Main = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
)

ReactDOM.render(<Main />, document.getElementById('main'))
