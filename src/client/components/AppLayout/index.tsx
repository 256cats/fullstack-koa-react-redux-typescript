import * as React from 'react'
import '!style-loader!css-loader!sass-loader!./scss/index.scss'
import { IFilters, IMatch } from '../../../shared'

export default class AppLayout extends React.Component<any, any> {
   
  public render() {
    const { children } = this.props
    return <div className="app">
      { children}
    </div>
  }
}
