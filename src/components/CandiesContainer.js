import React, { Component } from 'react'
import {connect} from 'react-redux'
import { buyCandies } from '../redux/candies/CandiesAction'

class CandiesContainer extends Component {
    state={}
    render() {
        return (
            <div>
                <h1>Number of Candies : {this.props.candies}</h1>
                <button onClick={this.props.purchase}>Buy Some Candies</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        candies : state.candies.numOfCandies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        purchase : ()=> dispatch(buyCandies())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CandiesContainer)
