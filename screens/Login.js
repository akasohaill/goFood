import React, { useState } from 'react'
import { Link ,useNavigate } from 'react-router-dom'


export default function Login() {
  const [credential, setcredentials] = useState({ email: "", password: "" })
  let navigate=useNavigate()
  const handleSubmit = async (e) => {

    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credential.email, password: credential.password })
    });
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Invalid Credential");
    }
    if(json.success){
      localStorage.setItem('token',json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate('/')
  }
  }
  const onChange = (event) => {
    setcredentials({ ...credential, [event.target.name]: event.target.value })
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credential.email} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='password' onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
          <Link to='/Signup' className='m-3 btn btn-danger'>New User</Link>
        </form>
      </div>
    </>
  )
}
