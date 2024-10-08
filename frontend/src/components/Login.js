import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""})
    let navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          });
          const json = await response.json()
          console.log(json)
          if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            props.showAlert('Successfully Logged In', 'success')
            navigate('/')
          }
          else{
            props.showAlert('Invalid Credentials', 'danger')
        }
    }
    
    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={onChange} value={credentials.email} type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={onChange} value={credentials.password} type="password" className="form-control" id="password" name='password' minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
