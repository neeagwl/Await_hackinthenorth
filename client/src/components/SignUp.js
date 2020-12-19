import React, { useState } from 'react'
import "./SignUp.css";

function SignUp() {

    return (
        <div className="login">
            <div className="wrapper">
            <div className="title">
                    Sign Up</div>
                <form action="./NavigationBarPatient">
                    <div className="field">
                        <input type="text" required />
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <p>
                        <input type="checkbox" name="patient" id="checkbox" value="checkbox"/>
                        <lable for="checkbox">  Sign Up as a Patient</lable><br></br>
                        <input type="checkbox" name="patient" id="checkbox" value="checkbox"/>
                        <lable for="checkbox">  Sign Up as a Patient</lable>
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

    )
}

export default SignUp
