import React from 'react'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Header from '../Dashboard/Components/Header/Header'

const Audit = () => {
  return (
    <div className='audit flex'>
      <div className="auditContainer flex">
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

export default Audit