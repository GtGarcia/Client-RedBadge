import React, { Component } from 'react'
import { APIURL, EndPoints } from '../endpoints'
import {Form,FormGroup,Label,Input,Button,FormText} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ShoeAdd.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//TODO Add the Following: id, shoeName, brandName, size, condition, samePair, buyPrice, sellPrice


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
    sessionToken: string
    

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
    shoeID?: string
}



class ShoeCreate extends Component<TypeProps, StateType> {
    constructor(props: TypeProps) {
        super(props)
        this.state = {
            shoeName: '',
            brandName: '',
            size: '',
            condition: '',
            samePair: '',
            buyPrice: '',
            sellPrice: '',
            
        }
        this.createShoe = this.createShoe.bind(this)
    }





    createShoe(e:any) {

        e.preventDefault()

        const reqObj = {
            shoeName: this.state.shoeName,
            brandName: this.state.brandName,
            size: this.state.size,
            condition: this.state.condition,
            samePair: this.state.samePair,
            buyPrice: this.state.buyPrice,
            sellPrice: this.state.sellPrice
        }

        fetch(APIURL+ EndPoints.shoe.create, {
            method: 'POST',
            body: JSON.stringify(reqObj),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.state.sessionToken}` 
            })
        })
        .then(res => res.json())
        .then((data => {
            console.log(data)
            this.createShoe('Shoe Made!!')
        }))
        .catch((err) => console.log(err))
    }


    ShoeName(e:any){
        this.setState({ shoeName: e.target.value })
    }
    BrandName(e:any){
        this.setState({ brandName: e.target.value })
    }
    Size(e:any){
        this.setState({ size: e.target.value })
    }
    Condition(e:any){
        this.setState({ condition: e.target.value })
    }
    SamePair(e:any){
        this.setState({ samePair: e.target.value })
    }
    BuyPrice(e:any){
        this.setState({ buyPrice: e.target.value })
    }
    SellPrice(e:any){
        this.setState({ sellPrice: e.target.value })
    }

    

    render() {

        const notify = () => toast.success(
            'Shoe Successfully Added to Inventory!'
        )

        return(
            <div className = 'shoeFont'>
                <Form onSubmit = {this.createShoe}>
                        <FormGroup>
                            <Label htmlFor = 'ShoeName'>Name Of the Shoe</Label>
                            <Input
                            id= 'ShoeName'
                            name = 'shoeName'
                            placeholder = 'ShoeName'
                            value = {this.state.shoeName}
                            onChange = {(e) => this.ShoeName(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor = 'BrandName'>Brand Name Of the Shoe</Label>
                            <Input
                            id= 'BrandName'
                            name = 'brandName'
                            placeholder = 'BrandName'
                            value = {this.state.brandName}
                            onChange = {(e) => this.BrandName(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor = 'ShoeSize'>Shoe Size</Label>
                            <Input
                            id= 'ShoeSize'
                            name = 'shoeSize'
                            placeholder = 'ShoeSize'
                            value = {this.state.size}
                            onChange = {(e) => this.Size(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor = 'Condition'>Condition</Label>
                            <Input
                            id= 'Condition'
                            name = 'condition'
                            placeholder = 'Condition'
                            value = {this.state.condition}
                            onChange = {(e) => this.Condition(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor = 'SamePair'>How Many Pairs Do You Have?</Label>
                            <Input
                            id= 'SamePair'
                            name = 'samePair'
                            placeholder = 'SamePair'
                            value = {this.state.samePair}
                            onChange = {(e) => this.SamePair(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor = 'BuyPrice'>Price Bought at</Label>
                            <Input
                            id= 'BuyPrice'
                            name = 'buyPrice'
                            placeholder = 'BuyPrice'
                            value = {this.state.buyPrice}
                            onChange = {(e) => this.BuyPrice(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor = 'SellPrice'>Price Willing to Sell At</Label>
                            <Input
                            id= 'SellPrice'
                            name = 'sellPrice'
                            placeholder = 'SellPrice'
                            value = {this.state.sellPrice}
                            onChange = {(e) => this.SellPrice(e)}
                            />
                        </FormGroup>
                        
                        <Button onClick= {notify} type = 'submit' id= 'submitButtons'>Add Shoe to Inventory</Button>
                        <ToastContainer/>
                </Form>
            </div>
        )
    }
}

export default ShoeCreate;