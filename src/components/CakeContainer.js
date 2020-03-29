import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux'
  
function CakeContainer(props) {
    // console.log(props.cakes.numOfCakes)
    return (
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
     return{
    numOfCakes: state.cakes.numOfCakes
     }
}

// Instead of writing all this you can directly sent function directly in the connect function
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         buyCake:()=>dispatch(buyCake())
//     }
// }

export default connect(mapStateToProps,{buyCake})(CakeContainer)
