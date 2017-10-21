import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'
import { IAppStore } from './interfaces.d'
import { IFilters, IMatch, defaultFilters } from '../../shared'

const initialStore: IAppStore = {
  filters: defaultFilters,
  matches: [],
  ui: {
    isLoading: false
  }
}

export default handleActions<IAppStore, any>({
  [Actions.FILTER_CHANGE]: (state, action) => {
    return {
      ...state,
      filters: { ...action.payload }
    }
  },
  [Actions.SEARCH_REQUEST_FETCH]: (state, action) => {
    return {
      ...state,
      ui: {
        isLoading: true
      }
    }
  },
  [Actions.SEARCH_REQUEST_RECEIVE]: (state, action) => {
    return {
      ...state,
      matches: [ ...action.payload ],
      ui: {
        isLoading: false
      }
    }
  }
}, initialStore)
