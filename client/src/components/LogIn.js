import React from 'react'
import "./LogIn.css";
import axios from 'axios';
import {NavigationBar} from './NavigationBar';
import {BrowserRouter as Router} from "react-router-dom";

class LogIn extends React.Component{
    state={username:'', password:''};

    handleSubmit=async (e)=>{
        e.preventDefault();
        const data= this.state;
        const res = await axios.post('/api/login',
        {
                username:data.username,
                password:data.password
        })
        console.log(res);
        if(res.status===200){
            
            this.props.history.push('/');
        }else{
            this.props.history.push('/components/LogIn');
        }
        
    }
    render(){
        return (
            <>
            <Router>
                <NavigationBar/>
            </Router>
            <div className="login">
            <div className="wrapper">
                <div className="title">
                    Log In</div>
                <form action="./NavigationBarPatient" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <input type="text" 
                        value={this.state.username}
                        onChange={e=> this.setState({username:e.target.value})}
                         required />
                        <label>Username</label>
                    </div>
                    <div className="field">
                        <input type="password"
                            value={this.state.password}
                            onChange={e=> this.setState({password:e.target.value})}
                        required />
                        <label>Password</label>
                    </div>
                    <div className="content">
                    </div>
                    <div className="field">
                        <input type="submit" value="Login" />
                    </div>
                    <div className="signup-link">
                        Not a member? <a href="./SignUp">Sign Up now</a></div>
                </form>
            </div>
        </div>
            </>
        )
    }
}

export default LogIn
