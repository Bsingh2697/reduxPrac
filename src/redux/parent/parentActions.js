import {FETCH_PARENT_DATA , FETCH_PARENT_SUCCESS, FETCH_PARENT_FAILURE} from './parentTypes'
import axios from 'axios'

export const fetchPatentData = () => {
    return {
        type : FETCH_PARENT_DATA,
    }
}

export const fetchPatentSuccess = (parents) => {
    return {
        type : FETCH_PARENT_SUCCESS,
        payload : parents
    }
}

export const fetchPatentFailure = (errorMsg) => {
    return {
        type : FETCH_PARENT_FAILURE,
        payload : errorMsg
    }
}

export const fetchParent = () =>{
    return (dispatch) => {
            dispatch(fetchPatentData)
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then( response => {
                const parents = response.data
                dispatch(fetchPatentSuccess(parents))
                console.log('Successfull')
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchPatentFailure(errorMsg))
                console.log('Failure')
            })

    } 
}