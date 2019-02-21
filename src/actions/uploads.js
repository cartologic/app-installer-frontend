import {
    ADD_APPS,
    APPS_LOADING,
    DELETE_APPS,
    SET_APPS,
    SET_TOTAL_COUNT
} from './constants'
export function addApps( apps ) {
    return {
        type: ADD_APPS,
        payload: apps
    }
}
export function deleteApps( appIDs ) {
    return {
        type: DELETE_APPS,
        payload: appIDs
    }
}
export function newUploads( apps ) {
    return {
        type: SET_APPS,
        payload: SET_APPS
    }
}
export function appsLoading( loading ) {
    return {
        type: APPS_LOADING,
        payload: loading
    }
}
export function appsTotalCount( count ) {
    return {
        type: SET_TOTAL_COUNT,
        payload: count
    }
}
