import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
import Desposal from './Components/Desposal/Desposal'
import Allocation from './Components/Allocation/Allocation'
import Audit from './Components/Audit/Audit'
import Receiving from './Components/Receiving/Receiving'
import Decommission from './Components/Decommission/Decommission'
import Blocks from './Components/Blocks/Blocks'
import Transfer from './Components/Transfer/Transfer'
import Design from './Components/Design/Design'
import Export from './Components/Export/Export'
import Main from './Components/Main/Main'
import Quick from './Components/Quick/Quick'

import Device from './Components/Home/Device/Device'
import Scanner from './Components/Home/Scanner/Scanner'
import Server from './Components/Home/Server/Server'
import Laptop from './Components/Home/Laptop/Laptop'
import AllInOne from './Components/Home/AllInOnePc/AllInOnePc'
import Printer from './Components/Home/Printer/Printer'
import Projector from './Components/Home/Projector/Projector'
import Tv from './Components/Home/Tv/Tv'
import Desktop from './Components/Home/Desktop/Desktop'
import Coppier from './Components/Home/Coppier/Coppier'


//Import React router dom
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import User from './Components/User/User'


//let create a router
const router = createBrowserRouter([
   {
     path:'/',
     element: <div> <Login /></div>
   },
   {
     path:'/register',
     element: <div> <Register/></div>
   },
   {
     path:'/dashboard',
     element: <div> <Dashboard /></div>
   },
   {
     path:'/home',
     element: <div> <Home /></div>
   },
   {
     path:'/allocation',
     element: <div> <Allocation /></div>
   },
   {
     path:'/audit',
     element: <div> <Audit /></div>
   },
   {
     path:'/desposal',
     element: <div> <Desposal /></div>
   },
   {
     path:'/receiving',
     element: <div> <Receiving /></div>
   },
   {
     path:'/decommission',
     element: <div> <Decommission/></div>
   },
   {
     path:'/transfer',
     element: <div> <Transfer/></div>
   },
   {
     path:'/blocks',
     element: <div> <Blocks/></div>
   },
   {
     path:'/user',
     element: <div> <User/></div>
   },
   {
     path:'/design',
     element: <div> <Design/></div>
   },
   {
     path:'/quick',
     element: <div> <Quick /></div>
   },
   {
     path:'/main',
     element: <div> <Main /></div>
   },
   {
     path:'/export',
     element: <div> <Export /></div>
   },   
   {
     path:'/home/device',
     element: <div> <Device /></div>
   },
   {
     path:'/home/server',
     element: <div> <Server /></div>
   },
   {
     path:'/home/projector',
     element: <div> <Projector /></div>
   },
   {
     path:'/home/tv',
     element: <div> <Tv /></div>
   },
   {
     path:'/home/coppier',
     element: <div> <Coppier /></div>
   },
   {
     path:'/home/scanner',
     element: <div> <Scanner /></div>
   },
   {
     path:'/home/printer',
     element: <div> <Printer /></div>
   },
   {
     path:'/home/allinone',
     element: <div> <AllInOne /></div>
   },
   {
     path:'/home/laptop',
     element: <div> <Laptop /></div>
   },
   {
     path:'/home/desktop',
     element: <div> <Desktop /></div>
   }
   
])


function App() {

  return (
 <div>
   <RouterProvider  router = {router}/>
 </div>
  )
}

export default App
