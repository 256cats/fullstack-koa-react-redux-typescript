import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { configureStore } from './store'

const rootEl = document.getElementById('root')
const store = configureStore()
const history = createBrowserHistory()

function render() {
  // tslint:disable-next-line
  const App = require('./containers/App').default
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store} >
        <Router history={ history }>
          <Switch>
            <Route path="/" component={ App } />
          </Switch>
        </Router>
      </Provider>
    </AppContainer>,
    rootEl
  )
}

render()

// Enable Webpack Hot Module Replacement API
declare const module: { hot: any }

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    setTimeout(render(), 0)
  })
}
