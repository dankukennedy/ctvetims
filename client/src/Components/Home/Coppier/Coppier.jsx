import React from 'react'
import Sidebar from '../../../Components/Dashboard/Components/SideBar Section/Sidebar'
import Header from '../../../Components/Dashboard/Components/Header/Header'
const Coppier = () => {

  return (
   <div className='coppier flex'>
          <div className="coppierContainer flex">
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

export default Coppier