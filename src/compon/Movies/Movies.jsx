import { Settings,ArrowForwardIosOutlined, KeyboardArrowDown, Search } from '@material-ui/icons'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React,{ useState} from 'react'
import { Movielist } from '../../Movielist';
import './Movies.css';
import { Link } from 'react-router-dom';

const Movies=({moviedata})=>{
    const [holi,boli]=useState(Movielist);
   const [up,down]=useState(false);
   const [onn,off]=useState(false);
 
   const holyy=()=>{
       off(!onn);
     let holmov=Movielist.filter((movis)=>movis.konc === "hollywood")
      boli(holmov);
   }
   const bolyy=()=>{
       off(!onn);
       let holmov=Movielist.filter((movis)=>movis.konc === "bollywood")
       boli(holmov);
   }
   const all=()=>{
       off(!onn);
       boli(Movielist);
   }
   const handlech=(info)=>{
           moviedata(info);
   }
   const setting=()=>{
       down(!up);
       off(false);
   }
   const movieset=()=>{
    off(!onn);
    down(false);
   }
    return (
        <div className="movies">
        <div className="topbar">
          <div>
          </div>
           <div className="leftbar">
            <span>Movies <ArrowForwardIosOutlined style={{fontSize:"15px"}} onClick={movieset}/>
            </span>
            <span>Webseries<ArrowForwardIosOutlined style={{fontSize:"15px"}}/></span>
            <span>Tv Shows</span>
            <span>People</span>
            <span>More</span>
            </div>
            <div className={"moviebar " + (onn && "active")}>
            <span className="holly" onClick={holyy  }>Hollywood</span>
            <span className="bolly" onClick={bolyy} >Bollywood</span>
            <span className="bolly" onClick={all} >All</span>
            </div>
            <div className="rightbar">
                <span>ADD Account</span>
                <Search style={{color:"black",marginLeft:"25px",background:"white",borderRadius:"50px",padding:"2px"}}/>
               <KeyboardArrowDown style={{cursor:"pointer",marginLeft:"40px"}} onClick={setting}/>
            </div>
            <div className={"dropdown " + (up && "active")} >
               <div style={{display:"flex",alignItems:"center"}}><Settings/><span>Setting</span></div>
                <div style={{display:"flex",alignItems:"center"}}><ExitToAppIcon/> <span>Logout</span></div>
            </div>
        </div>
        <div >
        <div style={{width:"100%",height:"100%",backgroundColor:"black"}}>
             {holi.map((info)=>{
                 return(
                     <div className="box" >
                       <img src={info.imgsrc} alt="movies" className='imgf' />
                       <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"15px"}}>
                           <p style={{fontSize:"20px",}}>{info.movie}</p>
                           <Link to="/Movist" className="movbtn" onClick={()=>handlech(info.link)}>Watch Now</Link>
                       </div>
                    </div>
                    
                 )
             })};
             </div></div>
        </div>

    )
}
export default Movies;