import { createAction } from 'redux-actions'
import {
  IFilters,
  IMatch,
  Routes
} from '../../shared'
import * as Actions from '../constants/actions'
import { post } from '../lib/request'
import { debounce, curry } from 'lodash'

const DEBOUNCE_TIMEOUT = 500

const doRequest = debounce(async (dispatch, data) => {
  const url = Routes.POST_MATCHES
  try {
    const response = await post(url, data)
    dispatch(receiveSearch(response.data as Array<IMatch>))
  } catch (e) {
    console.log('http error', e) // todo - error handling
  }
}, DEBOUNCE_TIMEOUT)
export const requestSearch = (data: IFilters) => dispatch => doRequest(dispatch, data)

export const receiveSearch = createAction<Array<IMatch>>(Actions.SEARCH_REQUEST_RECEIVE)
export const filterChange = createAction<IFilters>(Actions.FILTER_CHANGE)
