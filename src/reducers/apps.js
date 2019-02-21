import {
    ADD_APPS,
    APPS_LOADING,
    DELETE_APPS,
    SET_APPS,
    SET_TOTAL_COUNT
} from '../actions/constants'
export function apps( state = [], action ) {
    switch ( action.type ) {
    case ADD_APPS:
        return [ ...state, ...action.payload ]
    case DELETE_APPS:
        return state.map( upload => !action.payload.includes( upload.id ) )
    case SET_APPS:
        return action.payload
    default:
        return state
    }
}
export function appsLoading( state = true, action ) {
    switch ( action.type ) {
    case APPS_LOADING:
        return action.payload
    default:
        return state
    }
}
export function appsTotalCount( state = 0, action ) {
    switch ( action.type ) {
    case SET_TOTAL_COUNT:
        return action.payload
    default:
        return state
    }
}
