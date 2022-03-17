import React, { Component } from 'react'
import Register from './Register/Register'



type StateData = {
    login: boolean
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    phoneNumber: string
}

type TypeProps = {
    state: StateData,
    updateToken: string|number|boolean|any,
}

type StateType = {
    login: boolean
    firstName?: string,
    lastName?: string,
    userName?: string,
    email?: string,
    password?: string,
    phoneNumber?: string
}



class Auth extends Component<TypeProps, StateType> {

constructor(props: TypeProps) {
    super(props)

    this.state = {
        login: false,

    }
}

    render() {
        return(
            <div>
                Hello From Auth!
                <Register updateToken={this.props.updateToken} state={this.props.state}/>
            </div>
        )
    }
}

export default Auth;