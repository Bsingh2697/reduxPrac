import {EAT_PASTERY} from './pasteryTypes'


const initialState = {
    numOfPastery:50
}

const pasteryReducer = (state=initialState, action) => {

    switch(action.type){
        case EAT_PASTERY: return{
            ...state,
            numOfPastery : state.numOfPastery - 1
        }
        default : return state
    }

} 

export default pasteryReducer