import React, { Component } from 'react'
import { APIURL, EndPoints} from '../endpoints'
import {Form,FormGroup,Label,Input,Button,FormText} from "reactstrap";
import "../Styles/Login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BOXOUT from '../assets/BOXOUT.jpg'

type StateData = {
    login: boolean,
    email: string,
    password: string
}

type TypeProps = {
    state: StateData,
    updateToken: any
}

type StateType = {
    login: boolean,
    email: string,
    password: string
}



class Login extends Component<TypeProps, StateType> {
    constructor(props: TypeProps) {
        super(props)
        this.state = {
            login: false,
            email: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(e:any) {
        e.preventDefault() 
        const reqObj = {
            email: this.state.email,
            password: this.state.password
        }

        fetch(APIURL + EndPoints.user.login, {
            method: 'POST',
            body: JSON.stringify(reqObj),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((res) => res.json())
        .then((data) => {
            this.props.updateToken(data.sessionToken)
        })
        .catch((err) => console.log(err))
    }

    stateEmail(e:any) {
        this.setState({ email: e.target.value })
    }

    statePassword(e:any) {
        this.setState({ password: e.target.value })

    }


    render() {

        const notifyy = () => toast.success(
            'Logged in! '
        )

        return(
            <div className = 'loginFont'>
                <img id = 'loginLogo' src={BOXOUT} alt="" />
                <h2 id = 'loginSpacing'>Login</h2>
                <Form onSubmit = {this.handleLogin}>
                    <FormGroup>
                        <Label for = 'Email'>Email</Label>
                        <Input
                        id = 'Email'
                        name = 'email'
                        placeholder = 'Enter Email here Please'
                        value = {this.state.email}
                        onChange = {(e) => this.stateEmail(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for = 'password'>
                            Password
                        </Label>
                        <Input
                        id = 'Password'
                        name = 'password'
                        placeholder = 'Enter Password Here Please'
                        value = {this.state.password}
                        onChange = {(e) => this.statePassword(e)}
                        />
                    </FormGroup>
                    <Button onClick = {notifyy} type = 'submit' id = 'submitButtons'>Login</Button>
                    <ToastContainer/>
                </Form>


            </div>
        )
    }
}

export default Login;