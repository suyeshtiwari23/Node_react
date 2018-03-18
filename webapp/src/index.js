import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import './assets/css/prabhaav.css'

import Header from './components/AppHeader'
import publicPage from './routes/PublicPage'
import login from './routes/Login'
import theme from './routes/Theme'

class App extends Component {
    render () {
        return (
            <div>
                <Header/>
                <Router history={hashHistory}>
                    <Route path="/" component={publicPage} />
                    <Route path="/login" component={login} />
                    <Route path="/theme" component={theme} testprop="hello"/>
                </Router>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'))