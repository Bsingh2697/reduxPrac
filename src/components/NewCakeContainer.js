import React,{ useState} from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux'
  
function NewCakeContainer(props) {
    // console.log(props.cakes.numOfCakes)
    const [number,setNumber]= useState(1)
    return (
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2>
            <input value={number} onChange={(event)=> setNumber(event.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy Cake</button>
        </div>
    )
}

 const mapStateToProps=(state)=>{
     return{
    numOfCakes: state.cakes.numOfCakes
     }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake:(number)=>dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
