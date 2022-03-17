import React, { Component } from 'react'
import { APIURL, EndPoints } from '../endpoints'
import {Form,FormGroup,Label,Input,Button,FormText} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ShoeAdd.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type StateData = {
    login: boolean,
    id: number,
    shoeName: string,
    brandName: string,
    size: string,
    condition: string,
    samePair: string,
    buyPrice: string,
    sellPrice: string,
    sessionToken: string,
    clothesID: number
    shoeID: number
    

}

type TypeProps = {
    state: StateData,
    sessionToken: string,
    updateToken: any
}

type StateType = {
    shoeName: string,
    brandName: string,
    size: string,
    condition: string,
    samePair: string,
    buyPrice: string,
    sellPrice: string,
    shoeID: number,
    id: any
}

class DeleteShoe extends Component <TypeProps, StateType>{

    constructor(props:TypeProps) {
        super(props)
        this.state = {
            shoeName: '',
            brandName: '',
            size: '',
            condition: '',
            samePair : '',
            buyPrice: '',
            sellPrice: '',
            shoeID: 0,
            id: ''
        }
        this.deleteShoe = this.deleteShoe.bind(this)
    }


    deleteShoe(e:any) {
        e.preventDefault();

        fetch(APIURL + EndPoints.shoe.delete + this.state.shoeID, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.sessionToken}`
            })
        })
        .then((data) => {
            console.log(data)
        }) .catch((err) => console.log(err))
    }

    setID(e:any) {
        this.setState({shoeID: e.target.value})
    }

    render() {
        const notify = () => toast.error(
            'Deleted!'
        )
        return(
            <div id = 'deleteFont'>
                
                <Form id= 'deleteFont' onSubmit = {this.deleteShoe}>
                    <FormGroup>
                        <Label htmlFor = 'id'>Please Type ID number to Confirm Deletion.</Label>
                        <Input
                        id = 'iD'
                        name = 'id'
                        placeholder = 'ID'
                        value = {this.state.shoeID}
                        onChange = {(e) => this.setID(e)}
                        />
                    </FormGroup>
                    <Button onClick = {notify} type = 'submit' id = 'submitButtons'>Delete</Button>
                    <ToastContainer/>
                </Form>

            </div>
        )
    }
}

export default DeleteShoe;