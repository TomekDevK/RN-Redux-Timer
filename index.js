// dependencies
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux'
import React, {Component} from 'react'
import { createStore } from 'redux';
// reducers
import reducer from './reducers'
// components
import App from './App';

const store = createStore(reducer)

class Api extends Component {
    render () {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}


AppRegistry.registerComponent('Timer', () => Api);
