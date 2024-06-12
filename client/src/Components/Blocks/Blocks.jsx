import React from 'react'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Header from '../Dashboard/Components/Header/Header'

const Blocks = () => {
  return (
    <div className='blocks flex'>
      <div className="blocksContainer flex">
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

export default Blocks