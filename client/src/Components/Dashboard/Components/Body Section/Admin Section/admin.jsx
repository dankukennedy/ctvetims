import React from 'react'
import './admin.css'

//imported icons
import {BsChevronDoubleRight } from 'react-icons/bs'


//imported images
import img from '../../../Assets/tab.png'
import img1 from '../../../Assets/programmer.png'
import img2 from '../../../Assets/transfer.png'
import img3 from '../../../Assets/register.png'
import img4 from '../../../Assets/inventory.png'
import img5 from '../../../Assets/add.png'


import user from '../../../Assets/user.png'
import user1 from '../../../Assets/user1.png'
import user2 from '../../../Assets/user2.jpeg'

const admin = () => {
  return (
    <div className='listingSection'>

        <div className="heading flex">
           <h1>Admin Dashbord </h1>
          <button className='btn flex'>
            See All <BsChevronDoubleRight className="icon" />
          </button>
        </div>

         <div className="secContainer flex">
            <div className="singleItem">
             <a href="/design"> <BsChevronDoubleRight className="icon"/>
               <img src={img} alt="Image Name" />
               <h3>Design Tab</h3></a>
            </div>

            <div className="singleItem">
            <a href="/user"><BsChevronDoubleRight className="icon"/>
               <img src={img1} alt="Image Name" />
               <h3>Add User</h3></a>
            </div> 

            <div className="singleItem">
               <BsChevronDoubleRight className="icon"/>
               <a href="/allocation"><img src={img2} alt="Image Name" />
               <h3>Allocation</h3></a>
            </div>

            <div className="singleItem">
               <BsChevronDoubleRight className="icon"/>
               <a href="/export"><img src={img3} alt="Image Name" />
               <h3>Export Register</h3></a>
            </div>
            
            <div className="singleItem">
               <a href="/main"><BsChevronDoubleRight className="icon"/>
               <img src={img4} alt="Image Name" />
               <h3>Main Inventory</h3></a>
            </div>

            <div className="singleItem">
               <a href="/quick"><BsChevronDoubleRight className="icon"/>
               <img src={img5} alt="Image Name" />
               <h3>Quick Add</h3></a>
            </div>

         </div>

         <div className="access flex">
            <div className="topAccess">
               <div className="heading flex">
               <h3>Top Access Users</h3> 
               <button className='btn flex'>
                  See All <BsChevronDoubleRight className="icon" />
               </button>
               </div>

               <div className="card flex">
                  <div className="users">
                     <img src={user} alt="User Image" />
                     <img src={user1} alt="User Image" />
                     <img src={user2} alt="User Image" />
                     <img src={user} alt="User Image" />
                  </div>
                  <div className="cardText">
                     <span>
                        14 Entries <br />
                        <small>
                           25 Entries <span className="date"> 7 days</span>
                        </small>
                     </span>
                  </div>
               </div>
            </div>

            <div className="featuredAccess">
               <div className="heading flex">
               <h3>Featured Access Users</h3> 
               <button className='btn flex'>
                  See All <BsChevronDoubleRight className="icon" />
               </button>
               </div>

               <div className="card flex">
                  <div className="users">
                     <img src={user1} alt="User Image" />
                     <img src={user} alt="User Image" />
                     <img src={user2} alt="User Image" />
                     <img src={user1} alt="User Image" />
                  </div>
                  <div className="cardText">
                     <span>
                        20 Entries <br />
                        <small>
                           252 Entries <span className="date"> 31 days</span>
                        </small>
                     </span>
                  </div>
               </div>
            </div>

         </div>
    </div>
  )
}

export default admin