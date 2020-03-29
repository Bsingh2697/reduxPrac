import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux/user/userActions'

function UserContainer(props) {
    return (
        <div>
            <button onClick={props.fetchUsers}>Click me to see List</button>
            <h1>Users List</h1>
            {props.userData.users.map(user => <p>{user.name}</p>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData : state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
