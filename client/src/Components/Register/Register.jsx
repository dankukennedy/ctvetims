
import React, {useState} from 'react'
import './Register.css'
import  '../../App.css'
//import { Spinner} from 'flowbite'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// importing our assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

// impored Icons 
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'



const Register = () => {
  const  [formData, setFormData] =useState({
     email:'',
     username:'',
     password:''
  })
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
   event.preventDefault();
   
   if (!formData.username || !formData.email || !formData.password || formData.username === '' || formData.email === '' || formData.password === '') {
     return setErrorMessage('Please fill out all fields.');
   } 
   
   try {
     const res = await axios.post("http://localhost:3000/server/auth/register", (formData));
     
     if (res.data.Status === "Success") {
         alert("Successfully Registered");
         navigate('/');
      } 
       else {
         alert("Error");
         navigate('/register');
        }
    } catch (err) {
     console.log(err);
     alert("Error either User already Existed or Conflict");
     navigate('/register');
   }
 };

 

  return (
    <div className='registerPage flex'>
        <div className="container flex">

         <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

                <div className="textDiv">
                   <h2 className="title"> Login to an Inventory System</h2> 
                   <p>CTVET</p>
                </div>

                <div className="footerDiv flex">
                   <span className="text">Have an Account login here</span> 
                   <Link to={'/'}>
                    <button className="btn">Login</button>
                   </Link>
                </div>
         </div>
             
             <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>Welcome Back!</h3>
                </div>   
                {errorMessage && <span className="showMessage">{errorMessage}</span>}            
              
                <form className="form grid" onSubmit={handleSubmit}>

                    <div className="inputDiv">
                       <label htmlFor="email">Email</label>
                       <div className="input flex">
                          <MdMarkEmailRead className ='icon' />
                          <input type="email" id='email' placeholder='Enter Email' onChange={e =>setFormData({...formData, email:e.target.value})} />
                       </div>
                    </div>

                    <div className="inputDiv">
                       <label htmlFor="username">Username</label>
                       <div className="input flex">
                          <FaUserShield className ='icon' />
                          <input type="text" id='username' placeholder='Enter Username' onChange={e =>setFormData({...formData, username:e.target.value})}  />
                       </div>
                    </div>

                    <div className="inputDiv">
                       <label htmlFor="password">Password</label>
                       <div className="input flex">
                          <BsFillShieldLockFill className ='icon' />
                          <input type="password" id='password' placeholder='Enter Password' onChange={e =>setFormData({...formData, password:e.target.value})} />
                       </div>
                    </div>
                    <button type='submit' className='btn flex' >
                        <span>Register</span>
                        <AiOutlineSwapRight className='icon' />
                    </button>

                      <span className='forgotPassword'>
                          Forgot  your password <a href=''>Click Here</a>
                      </span> 

                </form>
             </div>         
           
        </div>        
    </div>
   )
 
}

export default Register