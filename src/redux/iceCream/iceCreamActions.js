import {BUY_ICECREAM} from './iceCreamType'

//Define Action Creators
 export const buyIceCream = ()=>{
     console.log('Action Creator Called Ice Cream')
    return{
        type : BUY_ICECREAM
    }
}
