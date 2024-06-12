import React from 'react'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar'
import Header from '../Dashboard/Components/Header/Header'

const Main = () => {
  return (
    <div className='main flex'>
      <div className="mainContainer flex">
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

export default Main