import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext'

function Login(){
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username , password})
    }
    return(
        <div>
        <h3>Login page</h3>   
        <input 
        placeholder='username'
        value={username}
        onChange={(e)=>{setUsername(e.target.value)}} 
        type="text" />
       <br />
        <input 
        placeholder='password'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}} 
        type="text" />
        <br /><br />
        <button onClick={handleSubmit}>submit</button>
        </div>
     )
}

export default Login
