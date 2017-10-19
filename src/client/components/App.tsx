import * as React from 'react'
import '!style-loader!css-loader!sass-loader!./App.scss'

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
  public render() {
    return <div className="app">
      <h1>Hello World!</h1>
      <p>Foo to the barz</p>
    </div>
  }
}
