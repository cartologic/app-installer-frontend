import "@babel/polyfill/noConflict"
import 'semantic-ui-css/semantic.min.css'
import './css/installer.css'

import {
    Container,
    Message,
} from 'semantic-ui-react'
import React, { Component } from 'react'

import AppPagination from './components/Pagination'
import AppsList from './components/AppsList'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import store from './store'

class AppInstaller extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <NavBar />
                    <Container textAlign="center" style={{ marginTop: '7em' }}>
                        <Message warning>
                            <Message.Header>{"Warning!"}</Message.Header>
                            <p>{"Please note that the web server will be restarted after installing or uninstalling any application."}</p>
                        </Message>
                        <AppsList />
                        <br />

                        <AppPagination />
                    </Container>
                    <Footer />
                </div>
            </Provider>
        )
    }
}
ReactDOM.render(<AppInstaller />,
    document.getElementById('root')
)
if (module.hot) {
    module.hot.accept()
}