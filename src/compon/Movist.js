import React from 'react'
import ReactPlayer from 'react-player';

const Movist=({movi})=>{
    return(
        <div id="video" style={{width:"100%",height:"90vh",overflowY:"hidden",background:"black"}}>
         <ReactPlayer url={movi}
             width="100%"
             height="90vh"
             overflowY="hidden"
             controls={true}
         />
         </div>
         
     )
}

export default Movist;