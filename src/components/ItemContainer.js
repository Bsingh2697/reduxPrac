import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from '../redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function ItemContainer(props) {
    return (
        <div>
            <h1>Item- {props.item}</h1>
            <button onClick={props.buyItem}> Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const items = ownProps.cake
    ? state.cakes.numOfCakes 
    : state.iceCreams.numOfIceCreams
    return {
        item : items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake 
    ?  () => dispatch(buyCake())
    :  () => dispatch(buyIceCream())
    return {
        buyItem : dispatchFunction
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ItemContainer)
