import React from 'react'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Top from '../Dashboard/Components/Body Section/Top Section/Top'
import Activity from '../Dashboard/Components/Body Section/Activity Section/Activity'
import Listing from '../Dashboard/Components/Body Section/Listing Section/Listing'
const Home = () => {
  return (
    
<div className='home flex'>
    <div className="homeContainer flex">
         <Sidebar/>  
          <div className='mainContainer'>
        
               <Top />
    
                <div className='bottom flex'>
                    <Listing />         
                          
                    <Activity />
                </div>
          </div>
        </div>
    </div>
  )
}

export default Home

