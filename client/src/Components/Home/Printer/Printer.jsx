import React from 'react'
import Sidebar from '../../../Components/Dashboard/Components/SideBar Section/Sidebar'
import Header from '../../../Components/Dashboard/Components/Header/Header'



const Printer = () => {
  return (
    <div className='printer flex'>
    <div className="printerContainer flex">
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

export default Printer