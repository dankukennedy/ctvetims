import React from 'react'
import './listing.css'

//imported icons
import {BsArrowRightShort,BsChevronDoubleRight } from 'react-icons/bs'


//imported images
import img from '../../../Assets/computer.png'
import img1 from '../../../Assets/laptop.png'
import img2 from '../../../Assets/desktop.png'
import img3 from '../../../Assets/server1.png'
import img4 from '../../../Assets/printer1.png'
import img5 from '../../../Assets/projector1.png'
import img6 from '../../../Assets/tv1.png'
import img7 from '../../../Assets/photocoppier.png'
import img8 from '../../../Assets/scanner1.png'
import img9 from '../../../Assets/pen-drive1.png'

import user from '../../../Assets/user.png'
import user1 from '../../../Assets/user1.png'
import user2 from '../../../Assets/user2.jpeg'

const Listing = () => {
  return (
    <div className='listingSection'>

        <div className="heading flex">
           <h1>Inventory List</h1>
         <button className='btn flex'>
            See All <BsChevronDoubleRight className="icon" />
         </button>
        </div>

         <div className="secContainer flex">
            <div className="singleItem">
              <a href="/home/desktop"><BsChevronDoubleRight className="icon"/>
               <img src={img} alt="Image Name" />
               <h3>Desktops</h3></a> 
            </div>
            <div className="singleItem">
               <a href="/home/laptop"><BsChevronDoubleRight className="icon"/>
               <img src={img1} alt="Image Name" />
               <h3>Laptops</h3></a>
            </div>
            <div className="singleItem">
               <a href="/home/allinone"><BsChevronDoubleRight className="icon"/>
               <img src={img2} alt="Image Name" />
               <h3>All In One PC</h3></a>
            </div>
            <div className="singleItem">
               <a href="/home/server"><BsChevronDoubleRight className="icon"/>
               <img src={img3} alt="Image Name" />
               <h3>Servers</h3></a>
            </div>
            <div className="singleItem">
               <a href="/home/printer"><BsChevronDoubleRight className="icon"/>
               <img src={img4} alt="Image Name" />
               <h3>Printers</h3></a> 
            </div>
            <div className="singleItem">
               <a href=""><BsChevronDoubleRight className="icon"/>
               <img src={img5} alt="Image Name" />
               <h3>Projectors</h3></a>
            </div>
            <div className="singleItem">
               <a href="/home/tv">< BsChevronDoubleRight className="icon"/>
               <img src={img6} alt="Image Name" />
               <h3>TVs</h3></a>
            </div>
            <div className="singleItem">
               <a href="/home/scanner"><BsChevronDoubleRight className="icon"/>
               <img src={img8} alt="Image Name" />
               <h3>Scanners</h3></a>
            </div>
            <div className="singleItem">
              <a href="/home/coppier"> <BsChevronDoubleRight className="icon"/>
               <img src={img7} alt="Image Name" />
               <h3>Coppier</h3></a>
            </div>
            <div className="singleItem">
               <a href="/home/device"><BsChevronDoubleRight className="icon"/>
               <img src={img9} alt="Image Name" />
               <h3>Other Devices</h3></a>
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

export default Listing