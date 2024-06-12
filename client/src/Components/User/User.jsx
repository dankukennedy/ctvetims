import React from 'react'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Header from '../Dashboard/Components/Header/Header'

const User = () => {
  return (
    <div className='user flex'>
    <div className="userContainer flex">
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

export default User