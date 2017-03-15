import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import App from './App'
import About from './About'
import './index.css'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <div>
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
        </Router>
    </Provider>
</div>, document.getElementById('root'));
