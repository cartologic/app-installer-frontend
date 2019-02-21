import {
    apps,
    appsLoading,
    appsTotalCount
} from './apps'
import {
    token,
    urls,
    username
} from './other'

import { combineReducers } from 'redux'
export default combineReducers( {
    apps,
    appsLoading,
    appsTotalCount,
    urls,
    username,
    token,
} )
