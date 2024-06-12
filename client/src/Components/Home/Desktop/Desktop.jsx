import React from 'react'
import Sidebar from '../../../Components/Dashboard/Components/SideBar Section/Sidebar'
import Header from '../../../Components/Dashboard/Components/Header/Header'


const Desktop = () => {
  return (
        <div className='desktop flex'>
          <div className="desktopContainer flex">
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

export default Desktop


