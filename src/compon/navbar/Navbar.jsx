import { Search , Notifications, ArrowDropDown } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar=()=>{

   return( <div className="navbar">
           <div className="left">
             <img src="./images/netflix.png" alt="" style={{width:"60px",height:"50px"}}/>
             <span>HomePage</span>
             <span>Series</span>
             <Link to="./Movies" style={{textDecoration:"none",overflow:"hidden",color:"white "}}><span>Movies</span></Link>
             <span>New and popular</span>
             <span>My List</span>
           </div>
           <div className="right">
             <Search/>
             <span>KID</span>
             <Notifications/>
             <div className="profile">                
             <ArrowDropDown className="icon"/>
             <div className="options">
             <span>Setting</span>
             <span>Logout</span>
             </div>
             </div>
           </div>
    </div>)
}
export default Navbar
