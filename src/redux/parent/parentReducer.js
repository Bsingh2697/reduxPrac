import {FETCH_PARENT_DATA, FETCH_PARENT_SUCCESS, FETCH_PARENT_FAILURE}  from './parentTypes'

const initialState = {
    loading: false,
    parent: [],
    error: ''
}

const parentReducer = ( state = initialState , action) => {
    switch( action.type) {
        case FETCH_PARENT_DATA : 
        return { 
            ...state,
            loading: true,
        }
        case FETCH_PARENT_SUCCESS : 
        return {
            // ...state,
            loading:false,
            parent:action.payload,
            error:''
        }
        case FETCH_PARENT_FAILURE : 
        return { 
            // ...state,
            loading:false,
            parent:[],
            error:action.payload
        }
        default : return state
    }
}

export default parentReducer