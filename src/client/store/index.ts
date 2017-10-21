import { compose, createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger } from '../middleware'
import thunkMiddleware from 'redux-thunk'
import rootReducer, { RootStore } from '../reducers'

export function configureStore(initialStore?: RootStore) {
  let middleware = applyMiddleware(thunkMiddleware, logger)
  
  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware)
  }
  
  const store = createStore(rootReducer, initialStore, middleware) as Store<RootStore>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
