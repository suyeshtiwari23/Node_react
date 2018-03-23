import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import './assets/css/prabhaav.css'

import Header from './components/AppHeader'
import publicPage from './routes/PublicPage'
import login from './routes/Login'
import theme from './routes/Theme'
import applyTheme from './components/ApplyTheme'

const ThemedHeader = applyTheme(Header)
class App extends Component {
    render () {
        return (
            <div>
                <ThemedHeader/>
                <Router history={hashHistory}>
                    <Route path="/" component={applyTheme(publicPage)} />
                    <Route path="/login" component={applyTheme(login)} />
                    <Route path="/theme" component={applyTheme(theme)} />
                </Router>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'))