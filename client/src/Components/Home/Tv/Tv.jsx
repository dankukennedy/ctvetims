import React from 'react'
import Sidebar from '../../../Components/Dashboard/Components/SideBar Section/Sidebar'
import Header from '../../../Components/Dashboard/Components/Header/Header'


const Tv = () => {
  return (
    <div className='tv flex'>
     <div className="tvContainer flex">
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

export default Tv