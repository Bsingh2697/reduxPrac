import {BUY_CAKE} from './cakeTypes'
//Define Action Creators
 export const buyCake = (number=1)=>{
     console.log('Action Creator Called')
    return{
        type : BUY_CAKE,
        payload: number
    }
}
