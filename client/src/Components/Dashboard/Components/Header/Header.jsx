import React from 'react'
import './Header.css'

//Imported Icons
import {BiSearchAlt } from 'react-icons/bi'
import {TbMessageCircle  } from 'react-icons/tb'
import { IoIosNotificationsOutline } from 'react-icons/io'


// Imported image
import user from '../../Assets/user.png'


const Header = () => {
  return (
    <div className='topSection'>
        <div className="headerSection flex">
            <div className="title">
                <h1>CTVET  Assets & Inventory cleraManagement System</h1>
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

    </div>
  )
}

export default Header