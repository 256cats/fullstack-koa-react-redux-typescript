import { createSelector } from 'reselect'
import { IFilters, IMatch } from '../../shared'
import { RootStore, IAppStore } from '../reducers'

const appSelector = (store: RootStore): IAppStore => store.app

export const filtersSelector = createSelector(
  appSelector,
  (appStore: IAppStore): IFilters => appStore.filters
)

export const matchesSelector = createSelector(
  appSelector,
  (appStore: IAppStore): Array<IMatch> => appStore.matches
)
