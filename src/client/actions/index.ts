import { createAction } from 'redux-actions'
import { 
  IFilters, 
  IMatch, 
  Routes 
} from '../../shared'
import * as Actions from '../constants/actions'
import { post } from '../lib/request'

export const requestSearch = (data: IFilters) => async dispatch => {
  const url = Routes.POST_MATCHES
  try {
    const response = await post(url, data)
    dispatch(receiveSearch(response.data as Array<IMatch>))
  } catch (e) {
    console.log('http error', e) // todo - error handling
  }
}

export const receiveSearch = createAction<Array<IMatch>>(Actions.SEARCH_REQUEST_RECEIVE)
export const filterChange = createAction<IFilters>(Actions.FILTER_CHANGE)
