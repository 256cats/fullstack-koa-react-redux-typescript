import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import * as Actions from '../../actions'
import { RootStore } from '../../reducers'
import { IFilters, IMatch } from '../../../shared'
import AppLayout from '../../components/AppLayout'
import Filters from '../../components/Filters'
import SearchResults from '../../components/SearchResults'
import { filtersSelector, matchesSelector } from '../../selectors'

export namespace App {
  export interface IProps extends RouteComponentProps<void> {
    filters: IFilters;
    matches: Array<IMatch>;
    actions: typeof Actions;
  }
}

// Note: for the sake of simplicity App is the only container connected to Redux.
// In real app Filter and SearchResults would likely be containers with their own 
// actions and reducers

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component<App.IProps, any> {
  public componentDidMount() {
    const { actions, filters } = this.props
    actions.requestSearch(filters) // initial search request on app load
  }

  private onFilterChange(filters: IFilters) {
    const { actions } = this.props
    actions.filterChange(filters)
    actions.requestSearch(filters)
  }

  public render() {
    const { filters, actions, matches } = this.props
    const { onFilterChange } = this
    return <AppLayout>
      <Filters
        filters={ filters }
        onFilterChange={ onFilterChange }
      />
      <SearchResults
        matches={ matches}
      />
    </AppLayout>
  }
}

function mapStateToProps(store: RootStore) {
  return {
    filters: filtersSelector(store),
    matches: matchesSelector(store)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators<any>(Actions as any, dispatch) as typeof Actions
  }
}
