import React,{useState} from "react";
import axios from 'axios'
import { useHistory } from "react-router";
import { Link } from 'react-router-dom'
import { NavBtnLink, NavBtn } from "../Navbar/NavBarElements";



const LogInPage = (props) => {
  let history =useHistory()
  const initialFormValues=(
      {   
        "username": "",
        "password": ""
      })
    
    const [formValues,setFormValues]=useState(initialFormValues)
      
    const onChange=(e)=>{
      setFormValues({
          ...formValues,
          [e.target.name]:e.target.value
         })        
   }
      
      const onSubmit = evt => {
        evt.preventDefault()
        console.log(formValues);
        axios.post('https://african-marketplace-buildweek.herokuapp.com/api/users/login',formValues)
        .then(resp=>{
          console.log(resp.data.message);
          localStorage.setItem('token',resp.data.token);
          localStorage.setItem('message',resp.data.message);
          console.log(resp.data.token);
          history.push('/')
          window.location.reload(true);
         
        })
        .catch((err) => {
          console.log(err);
          alert("invalid username or password");
        });
      }
     
    return (

      <div className="login-container">
        <div className="login-body">
          <div className="login-left">
            <div className="login-box">
            <div className="login-title">
              <h2>Log in to see listed items!</h2>
            </div>
            <div className="login-form-container">
              <div className="login-form">
                <form id="log-in" onSubmit={onSubmit}>
                  <div className="inputSection">
                    <div>
                      <label> Username:&nbsp;
                        <input
                          value={formValues.username}
                          onChange={onChange}
                          name='username'
                          type='text'
                          id="username"
                        />
                      </label>
                    </div>
                    <div>
                      <label> Password:&nbsp;
                        <input
                          value={formValues.password}
                          onChange={onChange}
                          type="password"
                          name="password"
                          id="password"
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="login-button-div">
    

                <div className="login-button-container">
           
                  <NavBtnLink 
                    className="login-button"
                    onClick={onSubmit}
                    id='signup-button'>
                    Log In
                  </NavBtnLink>

                  <div></div>
            

        
                  <Link to="/signup" className="create-login">
                    <NavBtnLink to="/signup">Create Account</NavBtnLink>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="login-right">
          <div>
          </div>
        </div>

{/* LOGIN BODY ENDS HERE */}
        </div>
      </div>
    )
}


export default LogInPage;