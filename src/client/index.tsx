import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'
import { configureStore } from './store'
import { App } from './containers/App'

const rootEl = document.getElementById('root')
const store = configureStore()
const history = createBrowserHistory()

function renderApp(App: any) {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={ App } />
        </Switch>
      </Router>
    </Provider>,
    rootEl
  )
}

renderApp(App)

// Enable Webpack Hot Module Replacement API
declare const module: { hot: any }

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    // tslint:disable-next-line
    const NewApp = require('./containers/App').default
    renderApp(NewApp)
  })
}
