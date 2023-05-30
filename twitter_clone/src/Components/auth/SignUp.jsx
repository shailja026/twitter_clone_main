import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase"
import React, { useState } from 'react'

// Sign up component
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


// It will handle submission
const signUp = (e) => {
    e.preventDefault ()
    createUserWithEmailAndPassword(auth,email,password)
    .then((useCredential)=>{console.log(useCredential)})
    .catch((error)=>{console.log(error)})
}    

    
  return (
    <div className='sign-up-container'>
    <form onSubmit={signUp}><h1>Create Account</h1>
    <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
    <input type="password" placeholder='create your password ' value={password} onChange={(e)=>setPassword(e.target.value)} />
    <button type='submit'>Sign Up</button>
    </form>

    </div>
  )
}

export default SignUp