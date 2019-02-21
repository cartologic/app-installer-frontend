import { applyMiddleware, createStore } from 'redux'

import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'
export function configureStore( initialState ) {
    return createStore( rootReducer, initialState, applyMiddleware( ReduxThunk ) )
}
