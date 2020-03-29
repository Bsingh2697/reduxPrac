import {EAT_PASTERY} from  './pasteryTypes'

export const eat_pastery = () => { 
    console.log('EAT Pastrey Action Creator called')
    return{
        type: EAT_PASTERY
    }
}
