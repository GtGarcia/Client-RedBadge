import React, { Component } from 'react'
import { APIURL, EndPoints } from '../endpoints'
import {Form,FormGroup,Label,Input,Button,FormText} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type StateData = {
    login:boolean,
    id: number,
    clothesName: string,
    brandName: string,
    size: string,
    condition: string,
    sameClothes: string,
    buyPrice: string,
    sellPrice: string,
    sessionToken: string,
    clothesID: number
}

type TypeProps = {
    state: StateData,
    sessionToken: string,
    updateToken: any
}

type StateType = {
    clothesName: string,
    brandName: string,
    size: string,
    condition: string,
    sameClothes: string,
    buyPrice: string,
    sellPrice: string,
    clothesID: number,
    id: any

}

class DeleteClothes extends Component< TypeProps, StateType> {


    constructor (props:TypeProps) {
        super(props) 
        this.state = {
            clothesName: '',
            brandName: '',
            size: '',
            condition: '',
            sameClothes: '',
            buyPrice: '',
            sellPrice: '',
            clothesID: 0,
            id: ''
        }
        this.deleteClothes = this.deleteClothes.bind(this)
    }

    deleteClothes(e:any) {
        e.preventDefault();

        fetch(APIURL + EndPoints.clothes.delete + this.state.clothesID, {
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
        this.setState({clothesID: e.target.value})
    }

    render() {
        const notify = () => toast.error(
            'Deleted!'
        )
        return(

            <div>
                
                <Form onSubmit= {this.deleteClothes}>
                    <FormGroup>
                        <Label htmlFor = 'id'>Please Type ID number to Confirm Deletion.</Label>
                        <Input
                        id= 'ID'
                        name = "id"
                        placeholder = 'ID'
                        value = {this.state.clothesID}
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

export default DeleteClothes;