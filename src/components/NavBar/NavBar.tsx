import React, { Component } from 'react'
import {  Routes,Link,Route, Router} from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import CottageIcon from '@mui/icons-material/Cottage';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import IceSkatingRoundedIcon from '@mui/icons-material/IceSkatingRounded';
import CheckroomRoundedIcon from '@mui/icons-material/CheckroomRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import HomeTwo from '../Home2';
import Login from '../Login/Login';
import Auth from '../Auth'
import Register from '../Register/Register';
import {Form,FormGroup,Label,Input,Button,FormText} from "reactstrap";
import Routing from '../Routes/Routing';

import 'bootstrap/dist/css/bootstrap.min.css';
import LogOut from '../Logout/LogOut';
import ShoeCreate from '../Shoe/ShoeCreate';
import MyInventory from '../MyInventory';
import DisplayShoe from '../Shoe/DisplayShoe'
import ClothesCreate from '../Clothes/ClothesCreate';
import '../Styles/NavBar.css'
import Footer from './Footer';

type StateData = {
  login: boolean
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  password: string,
  phoneNumber: string
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
  sameClothes:string,
  clothesID: number,
  shoeID: number
}

type TypeProps = {
  state: StateData,
  updateToken: string|number|boolean|any,
  sessionToken: string
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

class NavBar extends Component<TypeProps, StateType> {

constructor(props:TypeProps) {
  super(props)
  this.state = {
    login: false

  }
}


    render() {
        return(

            
          <div className = 'navbar navbarStyle'>

      <Routes>

         <Route path= '/' element = {<HomeTwo/>}></Route>

         <Route path = '/Register' element = {<Register updateToken={this.props.updateToken} state={this.props.state}/>}>
         </Route>

         <Route path = '/Login' element = {<Login updateToken = {this.props.updateToken} state = {this.props.state}/>}></Route>
         
         <Route path = '/Create-Shoe' element = {<ShoeCreate state = {this.props.state} updateToken = {this.props.updateToken} sessionToken = {this.props.sessionToken}/>}></Route>

         <Route path = '/Create-Clothes' element = {<ClothesCreate state = {this.props.state} updateToken = {this.props.updateToken} sessionToken = {this.props.sessionToken}/>}></Route>

         <Route path = '/My-Inventory' element ={<MyInventory state = {this.props.state} updateToken={this.props.updateToken} sessionToken = {this.props.sessionToken} />}></Route>
      </Routes>


     <ListItemButton>
       <ListItemIcon>
        <CottageIcon />
       <ListItemText primary= {<Link id= 'homeIconFont' to = '/'>Home</Link>} />
       </ListItemIcon>
     </ListItemButton>

     <ListItemButton>
     <ListItemIcon >
        <KeyRoundedIcon sx = {{position: 'relative',left: 40}} />
        <ListItemText  primary={<Link className= 'iconFont' to = '/Register'>Register</Link>} />
      </ListItemIcon>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <KeyRoundedIcon sx = {{position: 'relative',left: 40}}/>
          <ListItemText primary = {<Link className= 'iconFont' to ='/Login' >Login</Link>}/>
        </ListItemIcon>
      </ListItemButton>

      {/* <ListItemButton className = 'iconBG'>
        <ListItemIcon>
          <IceSkatingRoundedIcon />
          <ListItemText primary = {<Link className= 'iconFont' to = '/Create-Shoe'>Add Shoe </Link>}/>
        </ListItemIcon>
      </ListItemButton> */}

      {/* <ListItemButton>
        <ListItemIcon>
        <CheckroomRoundedIcon />
          <ListItemText primary = {<Link className= 'iconFont' to = '/Create-Clothes'>Add Clothes </Link>}/>
        </ListItemIcon>
      </ListItemButton> */}

      <ListItemButton>
        <ListItemIcon>
        <Inventory2RoundedIcon sx = {{position: 'relative',left: 40}}/>
        <ListItemText primary = {<Link className= 'iconFont' to = '/My-Inventory'>My Inventory</Link>}/>
        </ListItemIcon>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <ExitToAppRoundedIcon  sx = {{position: 'relative',left: 100}}/>
        <ListItemText primary = {<LogOut/>}/>
        </ListItemIcon>
      </ListItemButton>



      
          <Footer/>
</div>
            
            
        )
    }
}

export default NavBar;