import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

const rootEl = document.getElementById('root')

render(
  <AppContainer>
      <App/>
  </AppContainer>,
  rootEl
)

// Enable Webpack Hot Module Replacement API
declare let module: {hot: any}

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // tslint:disable-next-line
    const NewApp = require('./components/App').default

    render(
      <AppContainer>
        <NewApp/>
      </AppContainer>,
      rootEl
    )
  })
}
