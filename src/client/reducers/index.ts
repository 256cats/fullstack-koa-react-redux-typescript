import { combineReducers, Reducer } from 'redux'
import { IAppStore, RootStore } from './interfaces.d'
export * from './interfaces.d'
import app from './app'

export default combineReducers<RootStore>({
  app
})
