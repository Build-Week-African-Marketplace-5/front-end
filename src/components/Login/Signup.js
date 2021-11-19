import React from "react";

import axios from 'axios'
import { useHistory } from "react-router";

const Signup = (props) => {
  let history =useHistory()
    const {
        values,
        change,
        errors,
        disabled,
      } = props
      
      const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value);
      }
      
      const onSubmit = evt => {
        evt.preventDefault()
        axios.post('https://african-marketplace-buildweek.herokuapp.com/api/users/register',values)
        .then(resp=>{history.push('/login')})
        .catch(err=>{console.log(err)})
      }
  
    return (

      <div className="signup-container">
        <div className="signup-body">
          <div className="signup-box">
          <div className="signup-title">
            <h2>Create A New Account</h2>
          </div>
          <div className="form-container">
            <div className="signup-form">
              <form id="sign-up" onSubmit={onSubmit}>
                <div>
                <label>Username:&nbsp;
                  <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                    id="username"
                  />
                </label>
                </div>

                
                <div>
                  <label>Password:&nbsp;
                    <input
                      value={values.password}
                      onChange={onChange}
                      type="password"
                      name="password"
                      id="password"
                    />
                  </label>
                </div>

              </form>
            </div>

            <div className="button-div">
              <div className="error-div">
                  <div id="error">{errors.username}</div>
                  <div id="error">{errors.phone}</div>
                  <div id="error">{errors.password}</div>
              </div>
    
              <div className="button-container">
                <button 
                  className="signup-button"
                  onClick={onSubmit}
                  disabled={disabled} 
                  id='signup-button'>
                  Sign Up
                </button>
              </div>
              <div>&nbsp;</div>
            </div>
          </div>

        
        
        </div>
        </div>
        
      </div>
    )  
       
       
}


export default Signup;