import React, { Component } from 'react'
import ClothesDisplay from './Clothes/DisplayClothes'
import DisplayShoe from './Shoe/DisplayShoe'
import '../../src/components/Styles/MyInventory.css'
import {  Routes,Link,Route, Router} from 'react-router-dom';
import Alert from '@mui/material/Alert';

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
    clothesName: string,
    sameClothes: string,
    clothesID: number,
    shoeID: number
    

}

type TypeProps = {
    state: StateData,
    sessionToken: string,
    updateToken: any
}

type StateType = {
    id: number
    login: boolean,
    shoeName: string,
    brandName: string,
    size: string,
    condition: string,
    samePair: string,
    buyPrice: string,
    sellPrice: string
    shoeArray: any,
    sessionToken: any
}

class MyInventory extends Component<TypeProps, StateType> {
        constructor(props: TypeProps) {
            super(props)
            this.state = {
                id: 0,
                login: false,
                shoeName: '',
                brandName: '',
                size: '',
                condition: '',
                samePair: '',
                buyPrice: '',
                sellPrice: '',
                shoeArray: [],
                sessionToken: ''
            }
        }
        




    render() {
        return(
            <div className = 'inventoryFont'>
                <DisplayShoe state ={this.props.state} sessionToken = {this.props.sessionToken} updateToken = {this.props.updateToken}/>

                <ClothesDisplay state = {this.props.state} sessionToken = {this.props.sessionToken} updateToken = {this.props.updateToken}/>
                
                
            </div>
        )
    }
}

export default MyInventory;