import React from 'react'
import './sidebar.css'

// Imported  Image
import logo from '../../Assets/logo.png'

//
import { IoMdArchive, IoMdPricetags, IoMdSpeedometer} from 'react-icons/io'
import { MdOutlineExplore} from 'react-icons/md'
import { IoHome} from 'react-icons/io5'
import { TfiBook} from 'react-icons/tfi'
import { AiOutlinePieChart } from "react-icons/ai";
import { IoArrowBackSharp } from "react-icons/io5";
import { FcShipped } from "react-icons/fc";
import {BsBuildingDown, BsBuildingsFill, BsFillSendArrowUpFill, BsQuestionCircle} from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
          <img src={logo} alt="image Name" />
         <h2> CTVET</h2>
      </div>

      <div className="menuDiv">
         <h3 className="divTitle">
            QUICK MENU
         </h3> 
         <ul className="menuLists grid">

            <li className="listItem">
                <a href="/dashboard" className='menuLink flex'>
                    <IoMdSpeedometer className="icon" />
                    <span  className="smallText">
                    Dashboard    
                    </span>
                </a>
            </li>

            <li className="listItem">
                <a href="/receiving" className='menuLink flex'>
                < IoMdPricetags className="icon" />
                    <span  className="smallText">
                    Receiving 
                    </span>
                </a>
            </li>

            <li className="listItem">
                <a href="/allocation" className='menuLink flex'>
                    <MdOutlineExplore className="icon" />
                    <span  className="smallText">
                    Allocation   
                    </span>
                </a>
            </li>

            <li className="listItem">
                <a href="/transfer" className='menuLink flex'>
                    <BsFillSendArrowUpFill className="icon" />
                    <span  className="smallText">
                    Transfer   
                    </span>
                </a>
            </li>

            <li className="listItem">
                <a href="/audit" className='menuLink flex'>
                    <TfiBook className="icon" />
                    <span  className="smallText">
                    Audit  
                    </span>
                </a>
            </li>

            <li className="listItem">
                <a href="decommission" className='menuLink flex'>
                    <BsBuildingDown className="icon" />
                    <span  className="smallText">
                    Decommission 
                    </span>
                </a>
            </li>

            <li className="listItem">
                <a href="/desposal" className='menuLink flex'>
                    <FcShipped className="icon" />
                    <span  className="smallText">
                    Desposal
                    </span>
                </a>
            </li>

            <li className="listItem">
                <a href="/blocks" className='menuLink flex'>
                    <BsBuildingsFill className="icon" />
                    <span  className="smallText">
                    CTVET Block A - E
                    </span>
                </a>
            </li>

         </ul>
      </div>

      <div className="settingsDiv">
         <h3 className="divTitle">
            SETTINGS
         </h3> 
         <ul className="menuLists grid">
           
         <li className="listItem">
                <a href="/home" className='menuLink flex'>
                    <IoHome className="icon" />
                    <span  className="smallText">
                    Home  
                    </span>
                </a>
            </li>

         <li className="listItem">
                <a href="#" className='menuLink flex'>
                    <IoMdArchive className="icon" />
                    <span  className="smallText">
                    Archieve  
                    </span>
                </a>
            </li>
             
            <li className="listItem">
                <a href="#" className='menuLink flex'>
                    <AiOutlinePieChart className="icon" />
                    <span  className="smallText">
                       Charts
                    </span>
                </a>
            </li>

        {/*  <li className="listItem">
                <a href="#" className='menuLink flex'>
                < BiTrendingUp className="icon" />
                    <span  className="smallText">
                    Trends  
                    </span>
                </a>
            </li> */}


            <li className="listItem">
                <a href="/" className='menuLink flex'>
                    <button  className="logout">
                    <IoArrowBackSharp className="icon" /> <span> Logout Here</span> 
                    </button>
                </a>
            </li>

         </ul>
      </div>

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
  )
}

export default Sidebar