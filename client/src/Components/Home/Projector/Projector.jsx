import React from 'react'
import Sidebar from '../../../Components/Dashboard/Components/SideBar Section/Sidebar'
import Header from '../../../Components/Dashboard/Components/Header/Header'



const Projector = () => {
  return (
    <div className='projector flex'>
    <div className="projectorContainer flex">
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

export default Projector