import React from 'react'
import './activity.css'

//imported icons
import { BsChevronDoubleRight} from 'react-icons/bs'

//imported user image
import user from '../../../Assets/user.png'
import user1 from '../../../Assets/user1.png'
import user2 from '../../../Assets/user2.jpeg'


const Activity = () => {
  return (
    <div className='activitySection'>
        <div className="heading flex">
            <h1>Resent Activity</h1>
             <button className='btn flex'>
               See All
               <BsChevronDoubleRight className="icon"/>
             </button>
        </div>

        <div className="secContainer grid">
           <div className="singleUser flex">
             <img src={user} alt="Customer Image"/>
             <div className="userDetails">
                <span className="name"> Administrator  </span>
                <small> Ordered a new Item</small>
             </div>
              <div className="duration">
                 30 Minutes Ago
              </div>
           </div>

           <div className="singleUser flex">
             <img src={user2} alt="Customer Image"/>
             <div className="userDetails">
                <span className="name"> Manager  </span>
                <small> Ordered a new Item</small>
             </div>
              <div className="duration">
                 1 Days Ago
              </div>
           </div>

           <div className="singleUser flex">
             <img src={user1} alt="Customer Image"/>
             <div className="userDetails">
                <span className="name"> User </span>
                <small> Ordered a new Item</small>
             </div>
              <div className="duration">
                 5 Days Ago
              </div>
           </div>

           <div className="singleUser flex">
             <img src={user} alt="Customer Image"/>
             <div className="userDetails">
                <span className="name"> Administrator  </span>
                <small>Entered a new Inventory</small>
             </div>
              <div className="duration">
                 2 Months Ago
              </div>
           </div>
           
           <div className="singleUser flex">
             <img src={user} alt="Customer Image"/>
             <div className="userDetails">
                <span className="name"> Administrator  </span>
                <small>Entered a new Inventory</small>
             </div>
              <div className="duration">
                 2 Months Ago
              </div>
           </div>

           <div className="singleUser flex">
             <img src={user2} alt="Customer Image"/>
             <div className="userDetails">
                <span className="name"> Manager  </span>
                <small> Ordered a new Item</small>
             </div>
              <div className="duration">
                 3 Months Ago
              </div>
           </div>

        </div>
    </div>
  )
}

export default Activity 