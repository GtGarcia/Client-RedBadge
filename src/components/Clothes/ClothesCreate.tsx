import React, { Component } from 'react'
import { APIURL, EndPoints } from '../endpoints'
import {Form,FormGroup,Label,Input,Button,FormText} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ClothesAdd.css'
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
    sessionToken: string
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

}

class ClothesCreate extends Component<TypeProps, StateType> {
    constructor(props:TypeProps){
        super(props)
        this.state = {
            clothesName: '',
            brandName: '',
            size: '',
            condition: '',
            sameClothes: '',
            buyPrice: '',
            sellPrice: ''

        }
        this.createClothes = this.createClothes.bind(this)
    }

    createClothes(e:any) {
        e.preventDefault()

        const reqObj = {
            clothesName: this.state.clothesName,
            brandName: this.state.brandName,
            size: this.state.size,
            condition: this.state.condition,
            sameClothes: this.state.sameClothes,
            buyPrice: this.state.buyPrice,
            sellPrice: this.state.sellPrice
        }
        fetch(APIURL + EndPoints.clothes.create, {
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
            this.createClothes('Clothes Created!!')
        }))
        .catch((err) => console.log(err))

    }

    ClothesName(e:any) {
        this.setState({ clothesName: e.target.value })
    }
    BrandName(e:any) {
        this.setState({ brandName: e.target.value })
    }
    Size(e:any) {
        this.setState({ size: e.target.value })
    }
    Condition(e:any) {
        this.setState({ condition: e.target.value })
    }
    SameClothes(e:any) {
        this.setState({ sameClothes: e.target.value })
    }
    BuyPrice(e:any) {
        this.setState({ buyPrice: e.target.value })
    }
    SellPrice(e:any) {
        this.setState({ sellPrice: e.target.value })
    }

    render() {
        const notify = () => toast.success(
            'Clothing Successfully Added to Inventory!'
        )
        return(
            <div className = 'clothesFont'>
                <Form onSubmit = {this.createClothes}>

                <FormGroup>
                    <Label htmlFor = 'ClothesName'>
                        Name of the Piece of Clothing
                    </Label>
                    <Input
                    id = 'ClothesName'
                    name= 'clothesName'
                    placeholder = 'Name of the Piece of Clothing'
                    value = {this.state.clothesName}
                    onChange = {(e) => this.ClothesName(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = 'BrandName'>
                        Brand Name
                    </Label>
                    <Input
                    id = 'BrandName'
                    name= 'brandName'
                    placeholder = 'Brand Name'
                    value = {this.state.brandName}
                    onChange = {(e) => this.BrandName(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = 'Clothes Size'>
                        Size
                    </Label>
                    <Input
                    id = 'ClothesSize'
                    name= 'clothesSize'
                    placeholder = 'Clothing Size'
                    value = {this.state.size}
                    onChange = {(e) => this.Size(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = 'Condition'>
                        Condition
                    </Label>
                    <Input
                    id = 'Condition'
                    name= 'condition'
                    placeholder = 'Condition'
                    value = {this.state.condition}
                    onChange = {(e) => this.Condition(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = 'SameClothes'>
                        How Many of the Same Do You Have?
                    </Label>
                    <Input
                    id = 'SameClothes'
                    name= 'sameClothes'
                    placeholder = 'Same Clothes Amount'
                    value = {this.state.sameClothes}
                    onChange = {(e) => this.SameClothes(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = 'BuyPrice'>
                        Price Bought At
                    </Label>
                    <Input
                    id = 'BuyPrice'
                    name= 'buyPrice'
                    placeholder = 'BuyPrice'
                    value = {this.state.buyPrice}
                    onChange = {(e) => this.BuyPrice(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor = 'SellPrice'>
                       Price Willing to Sell At
                    </Label>
                    <Input
                    id = 'SellPrice'
                    name= 'sellPrice'
                    placeholder = 'SellPrice'
                    value = {this.state.sellPrice}
                    onChange = {(e) => this.SellPrice(e)}
                    />
                </FormGroup>

                <Button onClick = {notify} type = 'submit' id = 'submitButtons'>Add To Inventory</Button>
                <ToastContainer/>
                </Form>
            </div>
        )
    }
}
export default ClothesCreate