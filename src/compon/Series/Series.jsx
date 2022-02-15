import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import Listitem from '../Listitem/Listitem'
import './Series.css'
import { useRef ,useState} from 'react'
import Store from '../../store'

const Series=({usedata,setinfo,setmovie,pause})=>{
    const [move,moveup]=useState(0);
    const [slider,getslider]=useState(0);
    const [data,getdata]=useState(Store);
    const handleChange=(bey)=>{
               usedata(bey.dey);
               pause(true);
               moveup(window.scrollTo(0,0));
               {Store.map((value)=>{
                     if(value.id===bey.dey){
                         setinfo(value.title);
                         setmovie(value.paragraph);

                     }
               })}
    }
   const listRef= useRef();
    const handleClick=(direction)=>{
        let distance=listRef.current.getBoundingClientRect().x-50
       if(direction === "left" && slider>0){
             getslider(slider-1);
             listRef.current.style.transform=`translateX(${400  + distance}px)`;
       }
       if(direction === "right" && slider<12)
        {     getslider(slider+1);
        listRef.current.style.transform=`translateX(${-300 + distance}px)`;
       }
    }
    return (
        <div className="list">
            <span className="listtitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={()=>handleClick("left")}/>
                <div className="continer" ref={listRef}>
                   {
                       data.map((currelem,index)=>{
                           return <div>
<Listitem imgdata={currelem.imgscr} index={index} handleChange={handleChange} dey={currelem.id}/>
                       </div>})
 
                   }

                    
                </div>
                <ArrowForwardIosOutlined className="sliderArrow Right" onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}
export default Series