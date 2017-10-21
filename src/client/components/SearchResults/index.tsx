import * as React from 'react'
// import '!style-loader!css-loader!sass-loader!./scss/index.scss'
import { IFilters, IMatch } from '../../../shared'

export interface StateProps {
  matches: Array<IMatch>;
}

export default class SearchResults extends React.Component<StateProps, any> {
  public render() {
    return <div>results</div>
  }
}
