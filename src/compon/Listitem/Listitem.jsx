import React from 'react'
import './Listitem.css'

const Listitem=({imgdata,index,handleChange,dey})=>{
    return(<div className="listitem">
          <img src={imgdata} alt="" key={index} className="edit" onClick={()=>handleChange({dey})}/>
    </div>)
}
export default Listitem;