import React, {useState} from 'react'
import './ForgotPassword.css'
import  '../../App.css'
import { Spinner } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {  signInStart,  signInSuccess,  signInFailure,} from "../../redux/user/userSlice";
import axios from 'axios'
// importing our assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

// impored Icons 
import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const ForgotPassword = () => {
   const  [formData, setFormData] = useState({
     email:'',
     password:''
  })
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
   event.preventDefault();
   
   if (!formData.email || !formData.password || formData.email === '' || formData.password === '') {
     return dispatch(signInFailure('Please fill out all fields.'));
   } 
   
   try {
      dispatch(signInStart());
      const res = await axios.post("http://localhost:3000/server/auth/forgotPassword", (formData));   
      if (res.data.Status === "Success") {
          alert("Check your Email for your password reset link");
          dispatch(signInSuccess(res.data))
          navigate("/");
         }
       }catch (error) {
        dispatch(signInFailure(error.message));
   }
 };
 

  return (
    <div className='loginPage flex'>
        <div className="container flex">

         <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

                <div className="textDiv">
                   <h2 className="title"> Login to an Inventory System</h2> 
                   <p>CTVET</p>
                </div>

                <div className="footerDiv flex">
                   <span className="text">Login an Account</span> 
                   <Link to={'/'}>
                    <button className="btn">Login</button>
                   </Link>
                </div>
         </div>
             
             <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>Forgot Password!</h3>
                </div>
                {errorMessage && <span className="showMessage">{errorMessage}</span>}   
                <form  className="form grid" onSubmit={handleSubmit}>
                    <div className="inputDiv">
                       <label htmlFor="username">Email</label>
                       <div className="input flex">
                          <FaUserShield className ='icon' />
                          <input type="email" id='email'autoComplete='off' placeholder='eg. name@company.com' onChange={e =>setFormData({...formData, email:e.target.value})}/>
                       </div>
                    </div>

                    <button type='submit' className='btn flex'>
                        <span>Send</span>
                        <AiOutlineSwapRight className='icon' />
                    </button>


                </form>
             </div>

        </div>        
    </div>
  )
}

export default ForgotPassword