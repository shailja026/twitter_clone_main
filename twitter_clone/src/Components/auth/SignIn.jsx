import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase"
import React, { useState } from 'react'

// Sign in component
const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


// It will handle submission
const signIn = (e) => {
    e.preventDefault ()
    signInWithEmailAndPassword(auth,email,password)
    .then((useCredential)=>{console.log(useCredential)})
    .catch((error)=>{console.log(error)})
}    
 
    
  return (
    <div className='sign-in-container'>
    <form onSubmit={signIn}><h1>Login</h1>
    <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" placeholder='create your password ' value={password} onChange={(e)=>setPassword(e.target.value)} />
    <button type='submit'>Sign In</button>
    </form>

    </div>
  )
}

export default SignIn