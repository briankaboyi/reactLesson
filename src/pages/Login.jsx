import React, { useRef } from 'react'
import useLoggin from '../hooks/useLoggin'

const Login = () => {
    const {handleLoggin}=useLoggin()
    const usernameRef = useRef()
    const passwordRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        const payload = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(payload.username)
        handleLoggin(payload)
       
    }
  return (
    <div>
      <form onSubmit={handleSubmit} action="" style={{display:"flex",flexDirection:"column",gap:"6px", padding:"20px", border:"1px solid #aaa"}}>
        <h1>Login</h1>
        <label htmlFor="">Username</label>
        <input type="text" name='username' ref={usernameRef} />
        <label htmlFor="">Password</label>
        <input type="password" ref={passwordRef} />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
