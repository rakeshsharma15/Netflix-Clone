import React,{useEffect,useRef} from 'react'
import './Photo.css'
import { ArrowRight,Info,Stop } from '@material-ui/icons'
import { Link } from 'react-router-dom';

const Photo=({setdata,info,movie,play,pause,vidinform})=>{
    const vidRef=useRef(null);  
    useEffect(()=>{
           playvideo();
           stopvideo();
    },[]);
     const  playvideo = () => {
        // You can use the play method as normal on your video ref
        vidRef.current.play();
        pause(!play);
      };
      const handlee=()=>{
        vidinform(setdata)
      }
       
     const stopvideo = () => {
        // Pause as well
        vidRef.current.pause();
        pause(!play);
      };
    return(
       <div className="featured">
      {play ? <img src={`./Images/img-${setdata}.jpg`}
              style={{width:"100%",height:"100%",objectFit:"cover",zIndex:"1"}} alt=""/>:null}
         <video
              ref={vidRef}
              src={`./videos/vid-${setdata}.mp4`}
              type="video/mp4"
              style={{width:"100%",height:"100%",objectFit:"cover"}}
              />
            <div className="para">
                <h1 className="head">{info}</h1>
                          
                <p className="par">{movie}</p>
                <div className="icon">
               {play ? <button className="play" onClick={playvideo}><ArrowRight/>Play</button>:
                    <button className="stop" onClick={stopvideo}><Stop/>Stop</button>}
                    <button className="info" ><Info/>Info</button>
                    <Link to="/Videoplayer" onClick={handlee} className="video">Watch movie </Link>
                </div>
            </div>
        </div>
    )
}

export default Photo;
