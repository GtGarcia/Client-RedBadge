import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

type StateData = {
    login: boolean
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    phoneNumber: string,
    sessionToken: any,
    updateToken: any,
    clothesID: number
}


type TypeProps = {
//   state: StateData
//   sessionToken: any
//   updateToken: any
}


type StateType = {
    login: boolean,
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    phoneNumber: string,
    updateToken: any,
    sessionToken: any,
    id: number,
    shoeName: string,
    brandName: string,
    size: string,
    condition: string,
    samePair: string,
    buyPrice: string,
    sellPrice: string,
    clothesName: string,
    sameClothes: string,
    clothesID: number,
    shoeID: number
    
}

class Home extends Component<TypeProps, StateType> {
    constructor(props:TypeProps) {
        super(props)
        this.state = {
            login: false,
            firstName:'',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            phoneNumber: '',
            sessionToken: '',
            updateToken: '',
            id: 0 ,
            shoeName: '',
            brandName: '',
            size: '',
            condition: '',
            samePair: '',
            buyPrice: '',
            sellPrice: '',
            clothesName: '',
            sameClothes: '',
            clothesID: 0,
            shoeID: 0

        }
        this.updateToken = this.updateToken.bind(this);
        this.clearToken = this.clearToken.bind(this);
    }

    updateToken(newToken:string){
        localStorage.setItem('token', newToken);
        this.setState({sessionToken: newToken});
    }

    clearToken = () => {
        localStorage.clear();
    }

    componentDidMount() {
        if(localStorage.getItem('token')){
            this.setState({sessionToken:localStorage.getItem('token')})
        }
    }

    render() {
        return(
            <div>
                <Router>
                    <React.Fragment>
                        <NavBar state={this.state} updateToken = {this.updateToken} sessionToken ={this.state.sessionToken}/>
                        
                    </React.Fragment>
                </Router>

            </div>
        )
    }
}

export default Home;