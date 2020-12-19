import React from 'react'
import "./LogIn.css";

function LogIn() {

    return (
        <div className="login">
            <div className="wrapper">
                <div className="title">
                    Log In</div>
                <form action="./NavigationBarPatient">
                    <div className="field">
                        <input type="text" required />
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input type="password" required />
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

    )
}

export default LogIn
