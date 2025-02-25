import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

 const {loading,login}=useLogin()

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await login(username,password);
  }

  return (
<div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto">
  <div className="w-full p-6 rounded-lg bg-gray-400/200 backdrop-blur-md border">
    <h1 className="text-3xl font-semibold text-center text-gray-300">Login

      <span className='text-sky-500'> ChatBox</span>
    </h1>
    <form  className='flex flex-col justify-center items-center ' onSubmit={handleSubmit}>
      <div>
        <label className='label p-2'>
          <span className='text-gray-300 label-text'>Username</span>
        </label>
        <input type="text" placeholder='Enter Username'  className='w-full input input-bordered h-10'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}/>
      </div>
      <div>
      <label className='label p-2'>
          <span className='text-gray-300 label-text'>Password</span>
        </label>
        <input type="password" placeholder='Enter Password'  className='w-full input input-bordered h-10'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        </div>

      <Link to="/signup" className='text-sm hover:underline hover:text-sky-500 mt-2 inline-block'>Dont't have an account? </Link>

      <div>
      <button className="btn btn-soft btn-info mt-4"
      disabled={loading}>{loading ? <span className='loading loading-spinner '></span> : "Login"}</button>
      </div>
    </form>
  </div>
</div>



  )
}

export default Login
