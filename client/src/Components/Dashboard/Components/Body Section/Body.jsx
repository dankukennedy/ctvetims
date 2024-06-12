import React from 'react'
import './body.css'

import Top from './Top Section/Top'
import Admin from './Admin Section/admin'
//import Listing from './Listing Section/Listing'
import Activity from './Activity Section/Activity'


const Body = () => {
  return (
    <div className='mainContainer'>
        <Top/>

        <div className='bottom flex'>
             <Admin />         
                   
            <Activity />
        </div>
    </div>
  )
}

export default Body