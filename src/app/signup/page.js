'use client'
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import signupImage from '../../../public/images/signup-image.png';

const signUp = () => {
  const [credentials,setCredentials] = useState(
    {email:'',firstName:'',lastName:'',password1:'',password2:''}
  )
  const handleChange = (e) =>{
    const {name,value} = e.target
    setCredentials(prevCredentials=>{
      return {
        ...prevCredentials,
        [name]:value
      }
    })
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(credentials)
    fetch('url',{
      method:POST,
      headers:{
        contentType:'application/json',
      },
      body:json.stringify(credentials)
    })
    .then(response=>{
      if(response.ok){
        console.log('account created succefully')
        return response.json
        // redurect to login page
      }
      else{
        throw new Error('Account not created!!')
      }
    })
    .then(data=>{

    } )
    .catch(err=>{console.log(err)})
  } 
  const imageStyle={
    height:'100vh',
    width:'auto',
  }
  return (
  <div className='flex gap-5'>
    <Image
    src={signupImage}
    style={imageStyle}
    alt='doctorPicture'
    priority={true}
    ></Image>
    <div className="flex flex-col justify-center gap-6 pl-[150px]">
      <p className='text-center font-bold text-2xl '>Sign Up</p>
      <form className='flex flex-col gap-3 w-[400px]' autoComplete='on'>
        <input
          onChange={handleChange}
          name='email' 
          value={credentials.email}
          type="email" 
          placeholder='Your email'/>
        <input
          onChange={handleChange}
          name='firstName' 
          value={credentials.firstName}
          type="text" 
          placeholder='First Name'/>
        <input
          onChange={handleChange}
          name='lastName' 
          value={credentials.lastName}
          type="text" 
          placeholder='Last Name'/>
        <input
          onChange={handleChange}
          name='password1' 
          value={credentials.password1}
          type="password" 
          placeholder='Password'/>
        <input
          onChange={handleChange}
          name='password2' 
          value={credentials.password2}
          type="password" 
          placeholder='Confirm Password'/>
        <button
          onClick={handleSubmit} 
          className='font-bold bg-blue-600 py-3 rounded-[8px] text-xl'
        >Sign Up</button>
      </form>
    </div>
  </div>
  )
}

export default signUp;