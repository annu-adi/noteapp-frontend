import React, {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/ContextProvider';



const Login = () => {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate() 
    const {login} = useAuth()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
       const response = await axios.post("https://noteapp-backend-rho.vercel.app/api/auth/login",{ email, password}

       );
       if(response.data.success){
        login(response.data.user)
        localStorage.setItem("token", response.data.token)
        navigate('/')
       }
        }catch(error){
       console.log(error)
        }
    };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className="border shadow p-6 w-80 bg-whtie">
        
        <h2 className='text-2x1 font-bold mb-4'>Login</h2>
    <form onSubmit={handleSubmit}>
       
        <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input type='email' className='w-full px-2 border'
             onChange={(e) => setEmail(e.target.value)}
             placeholder='Enter email' required/>

        </div>

    <div className='mb-4'>
            <label className='block text-gray-700'>password</label>
            <input type='password' className='w-full px-3 py-2 border' 
            onChange={(e) => setPassword(e.target.value)}

             placeholder='******' required/>

        </div>
        <div className='mb-4'>
        <button type="submit" className='w-full bg-teal-600 text-white py-2'>Login</button> 
        <p className='"text-center'>
            Don't Have Account? <Link to="/register">Register</Link>

        </p>
        </div>
        </form>
        </div>
</div>
  )
}

export default Login
