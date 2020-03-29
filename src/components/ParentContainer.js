import React from 'react'
import {connect} from 'react-redux'
import { fetchParent } from '../redux'

function ParentContainer(props) {
    return (
        <div>   
            <h1>List of Parents </h1>
            <button onClick = {props.fetchParent}>Press Me to See List of Parents</button>
            {props.parents.map(parent=><h3>{parent.name}</h3>)}
            {/* {props.userData.users.map(user => <p>{user.name}</p>)} */}

            </div>
    )
}                                                                                   


const mapStateToProps = (state) => {
    return{
        parents : state.parent.parent
        // userData : state.user
        
    }
}

export default connect(mapStateToProps,fetchParent)(ParentContainer)
