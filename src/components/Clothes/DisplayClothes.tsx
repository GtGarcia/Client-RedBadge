import React, { Component } from 'react'
import {  Routes,Link,Route, Router} from 'react-router-dom';
import CheckroomRoundedIcon from '@mui/icons-material/CheckroomRounded';
import { APIURL, EndPoints } from '../endpoints'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import UpdateClothes from './ClothesUpdate'
import DeleteClothes from './DeleteClothes'
import '../Styles/ClothesAdd.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';



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
    clothesArray: []

}

class ClothesDisplay extends Component<TypeProps, StateType> {
    constructor(props:TypeProps) {
        super(props)
        this.state = {
            clothesName: '',
            brandName: '',
            size: '',
            condition: '',
            sameClothes: '',
            buyPrice: '',
            sellPrice: '',
            clothesArray: []
        }
        this.fetchClothes = this.fetchClothes.bind(this)
    }

    fetchClothes = async () => {
        await fetch(APIURL + EndPoints.clothes.seeMy, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.props.sessionToken}`
            })
        })
        .then(res => res.json())
        .then(clothes => {
            this.setState({clothesArray: clothes})
            console.log(clothes)
        })
        .catch(err => console.log(`${err}`))
    }

    componentDidMount() {
        this.fetchClothes()
    }


    render() {
        return(
            <div className = 'clothesTable'>
                <h1 id = 'clothesNameDisplay'>Clothing</h1>

                <ListItemButton sx ={[
    { 
      '&:hover': {
        color: '#81ecec',
        backgroundColor: '#f1f2f6',
      }, position:'relative', bottom: 10 
    }, 
  
  ]}>
        <ListItemIcon>
        <CheckroomRoundedIcon sx = {{position:'relative', left: 430 }}/>
          <ListItemText primary = {<Link id= 'clothesIconFont' to = '/Create-Clothes'>Add Clothes </Link>}/>
        </ListItemIcon>
      </ListItemButton>

<TableContainer component={Paper} >
      <Table   size="small"  aria-label="a dense table">
        <TableHead  >
          <TableRow  >
            <TableCell >ID #</TableCell>
            <TableCell sx = {{fontWeight: 'bold', fontFamily: 'Hind'}} align="right">Clothing Name</TableCell>
            <TableCell sx = {{fontWeight: 'bold', fontFamily: 'Hind'}} align="right">Brand</TableCell>
            <TableCell sx = {{fontWeight: 'bold', fontFamily: 'Hind'}} align="right">Size</TableCell>
            <TableCell sx = {{fontWeight: 'bold', fontFamily: 'Hind'}} align="right">Condition</TableCell>
            <TableCell sx = {{fontWeight: 'bold', fontFamily: 'Hind'}} align="right">Same Piece of Clothing?</TableCell>
            <TableCell sx = {{fontWeight: 'bold', fontFamily: 'Hind'}} align="right">Buy Price</TableCell>
            <TableCell sx = {{fontWeight: 'bold', fontFamily: 'Hind'}} align="right">Target Sell Price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody >
          {this.state.clothesArray.map((myClothes:any) => (
            <TableRow 
              key={myClothes.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx = {{bottom: "100px"}} component="th" scope="row">
              <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                <div>
                 {myClothes.id}
          <Button sx= {{width:10,height: 20 ,backgroundColor: 'white',  position: 'relative',left: 18, bottom: 1}} variant="contained" {...bindTrigger(popupState)}>
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
            <Typography sx={{ p: 2 }}> <DeleteClothes state = {this.props.state} sessionToken = {this.props.sessionToken} updateToken = {this.props.updateToken} /></Typography>
          </Popover>
        </div>
      )}
    </PopupState>
              <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                <div style={{color: 'blue'}}>
                
          <Button sx= {{width:10,height: 20 ,backgroundColor: 'gray', position: 'relative', left: 26, fontFamily: 'Hind'}} variant="contained" {...bindTrigger(popupState)}>
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
            <Typography sx={{ p: 1 , paddingLeft: 1 }}> <UpdateClothes state= {this.props.state} sessionToken={this.props.sessionToken} updateToken= {this.props.updateToken} /></Typography>
          </Popover>
        </div>
      )}
    </PopupState>
              </TableCell>
              <TableCell sx = {{fontSize: 12, fontFamily: 'Hind'}} align="center">{myClothes.clothesName}</TableCell>
              <TableCell sx = {{fontSize: 12, fontFamily: 'Hind'}} align="center">{myClothes.brandName}</TableCell>
              <TableCell sx = {{fontSize: 12, fontFamily: 'Hind'}} align="center">{myClothes.size}</TableCell>
              <TableCell sx = {{fontSize: 12, fontFamily: 'Hind'}} align="center">{myClothes.condition}</TableCell>
              <TableCell sx = {{fontSize: 12, fontFamily: 'Hind'}} align="center">{myClothes.sameClothes}</TableCell>
              <TableCell sx = {{fontSize: 12, fontFamily: 'Hind'}} align="center">{myClothes.buyPrice}</TableCell>
              <TableCell sx = {{fontSize: 12, fontFamily: 'Hind'}} align="center">{myClothes.sellPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        )
    }
}

export default ClothesDisplay