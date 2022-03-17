import React, { Component } from 'react'
import { APIURL,EndPoints } from '../endpoints';
import {Form,FormGroup,Label,Input,Button,FormText} from "reactstrap";
import Routing from '../Routes/Routing';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Register.css'
import BOXOUT from '../assets/BOXOUT.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    phoneNumber: string
}

class Register extends Component<TypeProps, StateType> {

constructor(props:TypeProps) {
    super(props)
    this.state = {
        
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        phoneNumber: ''
    }
    this.handleRegister = this.handleRegister.bind(this);
}

handleRegister(e:any) {
    
    e.preventDefault()

    const reqObj = {
        firstName:this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber
    }
    
    fetch(APIURL + EndPoints.user.register, {
        method: 'POST',
        body: JSON.stringify(reqObj),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then((res) => res.json())
    .then((data) => this.props.updateToken(data.sessionToken))
}

stateFirstName(e:any) {
    this.setState({ firstName: e.target.value })
}

stateLastName(e:any) {
    this.setState({ lastName: e.target.value })
}

stateUserName(e:any) {
    this.setState({ userName: e.target.value })
}

stateEmal(e:any) {
    this.setState({ email: e.target.value })
}

statePassword(e:any) {
    this.setState({ password: e.target.value })
}

statePhoneNumber(e:any) {
    this.setState({ phoneNumber: e.target.value})
}


    render() {

       

        const notify = () => toast.success(
            <div>

            <h5>Successfully Registered! Head on Over to</h5> 
            <h5 ><Link className = 'successMessageFont' to = '/My-Inventory'>My Inventory</Link>!</h5>
            
            </div> 
        )
       
        return(
            <div className = 'registerFont'>
                <h2 id = 'registerSpacing'>Register</h2>
                <img id = 'registerLogo' src={BOXOUT} alt="" />
                <Form onSubmit={this.handleRegister}>
                    <FormGroup>
                        <Label for = 'FirstName'>
                            FirstName
                        </Label>
                        <Input
                        id= 'FirstName'
                        name = 'firstName'
                        placeholder = 'FirstName'
                        value = {this.state.firstName}
                        onChange = {(e) => this.stateFirstName(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for = 'LastName'>
                            LastName
                        </Label>
                        <Input 
                        id = 'LastName'
                        name = 'lastName'
                        placeholder = 'LastName'
                        value = {this.state.lastName}
                        onChange= {(e) => this.stateLastName(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for = 'UserName'>
                            User Name
                        </Label>
                        <Input 
                        id = 'UserName'
                        name = 'userName'
                        placeholder = 'User Name'
                        value = {this.state.userName}
                        onChange = {(e) => this.stateUserName(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for = 'Email'>
                            Email
                        </Label>
                        <Input
                        id = 'Email'
                        name = 'email'
                        placeholder = 'Email'
                        value = {this.state.email}
                        onChange = {(e) => this.stateEmal(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for = 'Password'>
                            Password
                        </Label>
                        <Input
                        type = 'password'
                        id = 'Password'
                        name = 'password'
                        placeholder = 'Password'
                        value = {this.state.password}
                        onChange = {(e) => this.statePassword(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for = 'Phone Number'>
                            Phone Number
                        </Label>
                        <Input
                        id = 'PhoneNumber'
                        name = 'phoneNumber'
                        placeholder = 'Phone Number'
                        value = {this.state.phoneNumber}
                        onChange = {(e) => this.statePhoneNumber(e)}
                        />
                    </FormGroup>
                        <Button onClick = {notify} type= 'submit' id= 'submitButtons'> Register</Button>
                        <ToastContainer/>
                </Form>
            </div>
        )
    }
}

export default Register;