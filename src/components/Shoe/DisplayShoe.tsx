import React, { Component } from 'react'
import {  Routes,Link,Route, Router} from 'react-router-dom';
import { APIURL, EndPoints } from '../endpoints'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IceSkatingRoundedIcon from '@mui/icons-material/IceSkatingRounded';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import DeleteShoe from './DeleteShoe';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Styles/ShoeAdd.css'
import { border, borderRadius, color, fontSize, height } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import UpdateShoe from './ShoeUpdate'
import { BorderColor } from '@mui/icons-material';





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
    clothesID: number,
    shoeID: number,
    setOpen?: boolean,
    orders?:any
    

}

type TypeProps = {
    state: StateData,
    sessionToken: string,
    updateToken: any,
    orders?: any
}

type StateType = {
    shoeName: string,
    brandName: string,
    size: string,
    condition: string,
    samePair: string,
    buyPrice: string,
    sellPrice: string
    shoeArray: [],
    shoeID?: number,
    setOpen?: boolean,
    orders?: any
}


class DisplayShoe extends Component<TypeProps, StateType> {
    constructor(props:TypeProps) {
        super(props)
        this.state = {
            shoeName: '',
            brandName: '',
            size: '',
            condition: '',
            samePair: '',
            buyPrice: '',
            sellPrice: '',
            shoeArray: [],
            setOpen: false,
            orders: []
        }
        this.fetchShoe = this.fetchShoe.bind(this)
    }

    fetchShoe = async()=> {
         await fetch (APIURL + EndPoints.shoe.seeMy, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.sessionToken}`
            })
        })
        .then(res => res.json())
        .then(shoes => {
            this.setState({shoeArray: shoes})
            console.log(shoes.brandName)
        })
        .catch(err => console.log(`${err}`))
    }

    componentDidMount() {
        this.fetchShoe()
        // this.fetchMyShoe()
    }

   
   


    render() {
    
        return(
            
            <div className= 'shoeTableFont' >
                <h1 id = 'nameDisplay'>Shoe's</h1>

                <ListItemButton sx ={[
    { 
      '&:hover': {
        color: '#81ecec',
        backgroundColor: '#f1f2f6',
      }, position:'relative', bottom: 10 
    }, 
  
  ]}>
        <ListItemIcon>
          <IceSkatingRoundedIcon  sx = {{position:'relative', left: 450 }}/>
          <ListItemText primary = {<Link id= 'iconFont' to = '/Create-Shoe'>Add Shoe </Link>}/>
        </ListItemIcon>
      </ListItemButton>

<TableContainer component={Paper} >
      <Table   size="small"  aria-label="a dense table">
        <TableHead  >
          <TableRow  >
            <TableCell >ID #</TableCell>
            <TableCell sx = {{fontWeight: 'bold', paddingLeft: 5, fontFamily: 'Hind'}} align="center">Shoe Name</TableCell>
            <TableCell sx = {{fontWeight: 'bold', paddingLeft: 10, fontFamily: 'Hind'}} align="center">Brand</TableCell>
            <TableCell sx = {{fontWeight: 'bold', paddingLeft: 10, fontFamily: 'Hind'}} align="center">Size</TableCell>
            <TableCell sx = {{fontWeight: 'bold', paddingLeft: 10, fontFamily: 'Hind'}} align="center">Condition</TableCell>
            <TableCell sx = {{fontWeight: 'bold', paddingLeft: 10, fontFamily: 'Hind'}} align="center">Same Pair?</TableCell>
            <TableCell sx = {{fontWeight: 'bold', paddingLeft: 10, fontFamily: 'Hind'}} align="center">Buy Price</TableCell>
            <TableCell sx = {{fontWeight: 'bold', paddingLeft: 10,fontFamily: 'Hind'}} align="center">Target Sell Price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody >
          {this.state.shoeArray.map((myShoe:any) => (
            <TableRow 
              key={myShoe.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx = {{bottom: "100px"}} component="th" scope="row">
              <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                <div>
                 {myShoe.id}
          <Button sx= {{width:10,height: 20 ,backgroundColor: 'white', position: 'relative',left: 18, bottom: 1}} variant="contained" {...bindTrigger(popupState)}>
            <DeleteIcon sx= {{ color: 'black'}}/>
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}> <DeleteShoe state = {this.props.state} sessionToken = {this.props.sessionToken} updateToken = {this.props.updateToken} /></Typography>
          </Popover>
        </div>
      )}
    </PopupState>
              <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                <div style={{color: 'blue'}}>
                
          <Button sx= {{width:10,height: 20 ,left: 17.5,backgroundColor: 'gray', position: 'relative', fontFamily: 'Hind'}} variant="contained" {...bindTrigger(popupState)}>
         Update
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 100,
              horizontal: 200,
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 1 , paddingLeft: 1 }}> <UpdateShoe state= {this.props.state} sessionToken={this.props.sessionToken} updateToken= {this.props.updateToken} /></Typography>
          </Popover>
        </div>
      )}
    </PopupState>
              </TableCell>
              <TableCell sx = {{fontSize: 10, paddingLeft: 5, fontFamily: 'Hind'}} align="center">{myShoe.shoeName}|</TableCell>
              <TableCell sx = {{fontSize: 10, paddingLeft: 10, fontFamily: 'Hind'}} align="center">{myShoe.brandName}</TableCell>
              <TableCell sx = {{fontSize: 10, paddingLeft: 10, fontFamily: 'Hind'}} align="center">{myShoe.size}</TableCell>
              <TableCell sx = {{fontSize: 10, paddingLeft: 10, fontFamily: 'Hind'}} align="center">{myShoe.condition}</TableCell>
              <TableCell sx = {{fontSize: 10, paddingLeft: 10, fontFamily: 'Hind'}} align="center">{myShoe.samePair}</TableCell>
              <TableCell sx = {{fontSize: 10, paddingLeft: 10, fontFamily: 'Hind'}} align="center">{myShoe.buyPrice}</TableCell>
              <TableCell sx = {{fontSize: 10, paddingLeft: 10, fontFamily: 'Hind'}} align="center">{myShoe.sellPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            
                 
                    {this.state.shoeArray.map((myShoe:any) => {
                        console.log(myShoe)
                        return(
                            <div>
                                
                                {/* <UpdateShoe state= {this.props.state} sessionToken={this.props.sessionToken} updateToken= {this.props.updateToken} /> */}
                                    {/* <h1>{myShoe.size}</h1>
                                    <p>{myShoe.shoeName } <UpdateShoe state= {this.props.state} sessionToken={this.props.sessionToken} updateToken= {this.props.updateToken} /></p> */}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayShoe;