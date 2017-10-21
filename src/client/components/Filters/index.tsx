import * as React from 'react'
// import '!style-loader!css-loader!sass-loader!./scss/index.scss'
import { IFilters, IMatch } from '../../../shared'

// todo - for simplicity all filters are in one component, 
// later has to be further separated into different components/containers
export interface StateProps {
  filters: IFilters;
}

export interface DispatchProps {
  onFilterChange: (filter: IFilters) => void;
}

export type ComponentProps = StateProps & DispatchProps

export default class Filters extends React.Component<ComponentProps, any> {
  public render() {
    return <div>filters</div>
  }
}
