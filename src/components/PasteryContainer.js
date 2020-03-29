import React from 'react'
import {connect} from 'react-redux'
import { eat_pastery} from '../redux'

function PasteryContainer(props) {
    return (
        <div>
                <div>
                Number of Pasteries : {props.numOfPastery}</div> 
                <button onClick={props.eat_pastery}>Eat Pastery</button> 
            </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numOfPastery : state.pastery.numOfPastery
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        eat_pastery : ()=> dispatch(eat_pastery())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PasteryContainer)
