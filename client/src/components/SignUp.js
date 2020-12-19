import React, { useState } from 'react'
import {NavigationBar} from './NavigationBar';
import {BrowserRouter as Router} from "react-router-dom";
import "./SignUp.css";
import axios from 'axios';

class SignUp extends React.Component{

    state={username:'',password:'',name:'',email:'',age:'',gender:'',isDoctor:false}

    handleSubmit=async (e)=>{
        e.preventDefault();
        const data=this.state;
        // console.log(data);
        const res = await axios.post('/api/register',
        {
                data
        })
        // console.log(res);
        if(res.status===201){
            this.props.history.push('/components/LogIn');
        }else{
            this.props.history.push('/components/SignUp');
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
                    Sign Up</div>
                <form action="./NavigationBarPatient" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <input type="text"
                            value={this.state.username}
                            onChange={e=>this.setState({username:e.target.value})}
                        required />
                        <label>Username</label>
                    </div>
                    <div className="field">
                        <input type="text"
                            value={this.state.email}
                            onChange={e=>this.setState({email:e.target.value})}
                        required />
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input type="text"
                            value={this.state.name}
                            onChange={e=>this.setState({name:e.target.value})}
                        required />
                        <label>Name</label>
                    </div>
                    <div className="field">
                        <input type="password"
                            value={this.state.password}
                            onChange={e=>this.setState({password:e.target.value})}
                        required />
                        <label>Password</label>
                    </div>
                    <div className="field">
                        <input type="Number"
                            value={this.state.age}
                            onChange={e=>this.setState({age:e.target.value})}
                        required />
                        <label>Age</label>
                    </div>
                    <div className="field">
                        <input type="text"
                            value={this.state.gender}
                            onChange={e=>this.setState({gender:e.target.value})}
                        required />
                        <label>Gender</label>
                    </div>
                    <p>
                        <input type="checkbox" name="patient" id="checkbox"
                        value="checkbox"/>
                        <lable for="checkbox">  Sign Up as a Patient</lable><br></br>
                        <input type="checkbox" name="doctor" id="checkbox"
                            value={this.state.isDoctor}
                            onChange={e=>this.setState({isDoctor: e.target.checked})}
                         value="checkbox"/>
                        <lable for="checkbox">  Sign Up as a Doctor</lable>
                    </p>
                    <div className="field">
                        <input type="submit" value="SignUp" />
                        <div className="signup-link">
                        Already a member? <a href="./LogIn">Log In now</a></div>
                    </div>
                    <div className="content">
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    )
    }
}

export default SignUp
