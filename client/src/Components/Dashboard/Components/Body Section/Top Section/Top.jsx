import React from 'react'
import './top.css'

//Imported Icons
import {BiSearchAlt } from 'react-icons/bi'
import {TbMessageCircle  } from 'react-icons/tb'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsQuestionCircle, BsChevronDoubleRight } from 'react-icons/bs'

// Imported image
import user from '../../../Assets/user.png'
import img from '../../../Assets/allInOne.png'
//import video from '../../../Assets/vid1.mp4'
import img1 from '../../../Assets/vit.webp'

const Top = () => {
  return (
    <div className='topSection'>
        <div className="headerSection flex">
            <div className="title">
                <h1>Welcome to CTVET Assets Management System</h1>
                <p>Hello , Welcome back!</p>
            </div>

            <div className="searchBar flex">
                 <input type="text" placeholder='Search Dashboard'  />
                 <BiSearchAlt className= "icon"/>
            </div>

            <div className="adminDiv flex">
                 <TbMessageCircle className="icon" />
                 <IoIosNotificationsOutline className="icon" />
                 <div className="adminImage">
                    <img src={user} alt="AdminImage" />
                 </div>
            </div>
        </div>

        <div className="cardSection flex">

          <div className="rightCard flex">
             {/*<h1>Take Inventory of your Items and Devices</h1>
              <p> Explore the Inventory or Add new inventory to the System by clicking on the buttons bellow </p>*/}
             
             <div className="buttons flex">
              <button className='btn'>Explore More</button>
              <button className='btn transparent'> Quick Add Inventory</button>
             </div>

            {/* <div className="videoDiv">
              <video src={video} autoPlay loop muted></video>
             </div>*/}

             <div className="imgDiv">
              <img src={img1} ></img>
             </div>
         </div>
         
         <div className="leftCard flex">
            <div className="main flex">

               <div className="textDiv">
                  <h1>Recent Inventory</h1>

                 <div className="flex">
                   <span>
                     Today <br /> <small> 4 Inventories </small>
                   </span>
                   <span>
                     This Month<br /> <small> 175 Inventories </small>
                   </span>
                  </div> 
                     
                     <span className="flex link">
                       Go to Inventories <BsChevronDoubleRight className="icon" />
                     </span>
               </div>
         
                <div className="imgDiv">
                  <img src={img} alt="Image Name" />
                </div>

                {/* we shall use this later */}
       
         <div className='sideBarCard'>
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p> Having Trouble in Inventory , please contact us for more questions</p>
                <button className='btn'> Go to help center </button>
              </div>         
            </div>
            


            </div>
         </div>

        </div>
    </div>
  )
}

export default Top