import React, { Component } from 'react'
import HomeTwo from '../Home2';
import Login from '../Login/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import '../Styles/NavBar.css'

class LogOut extends Component {

clearToken = () => {
    localStorage.clear()
    
}
    render() {
            const notify = () => toast.success(
                    'Successfully Logged Out!'
            )

        return(
            <form onSubmit = {this.clearToken}>
                
                <button  onClick = {notify} type = 'submit' id = 'buttonLogOut'> Log Out</button>

                <ToastContainer/>
            </form>
        )
    }
}

export default LogOut;