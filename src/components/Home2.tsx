import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import BOXOUT from './assets/BOXOUT.jpg'
import './Styles/HomePage2.css'


class HomeTwo extends Component {
    

    render() {
        


        
        
        return(

            <div id = 'HomePageIMG'>
                <img src={BOXOUT} alt="" />
               <h1 className = 'homeFontTitle'> BoxOut</h1>
               <h2 className = 'homeFontTitleTwo'>The only Tool you'll need to simplify your Inventory ... </h2>


                <h2 className = 'homeFont'>We know how hard it can be to organize and keep track of all the sneakers and clothes you may be buying to resell.
                <br/>
                <br />
                 BoxOut  wipes out your worry of not being able  to keep track of your Items you currently have. </h2>

                
                <a className = 'homeFontBottom' href="#HomePageIMG">Welcome To The Future...</a>
              
            </div>
        )
    }
}

export default HomeTwo;