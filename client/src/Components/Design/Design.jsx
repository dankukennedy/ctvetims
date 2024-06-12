import React from 'react'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Header from '../Dashboard/Components/Header/Header'

const Design = () => {
  return (
    <div className='design flex'>
      <div className="designContainer flex">
         <Sidebar/>  
          <div className='mainContainer'>
        
               <Header />
    
                <div className='bottom flex'>
                   
                </div>
          </div>
        </div>
    </div>
  )
}

export default Design

