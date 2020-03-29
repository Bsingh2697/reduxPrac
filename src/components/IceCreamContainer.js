import React from 'react'
import {buyIceCream} from '../redux/iceCream/iceCreamActions'
import { connect } from 'react-redux'

function iceCreamContainer( props ) {
    return ( 
        <div>
            <h2>Number Of IceCreams : {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
    numOfIceCreams : state.iceCreams.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default  connect( mapStateToProps, mapDispatchToProps )(iceCreamContainer)