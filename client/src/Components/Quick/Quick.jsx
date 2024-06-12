import React from 'react'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Header from '../Dashboard/Components/Header/Header'

const Quick = () => {
  return (
    <div className='quick flex'>
      <div className="quickContainer flex">
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

export default Quick