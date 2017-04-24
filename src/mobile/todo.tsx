import React, { Component }  from 'react';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../core/reducers'
import { CounterContainer } from './containers/CounterContainer'

const store = createStore(reducer)

export default class todo extends Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <CounterContainer />
            </Provider>
        )
    }
}