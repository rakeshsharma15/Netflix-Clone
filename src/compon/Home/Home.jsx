import React ,{ useState} from 'react'
import Navbar from '../navbar/Navbar'
import './Home.css'
import Photo from '../photo/Photo'
import Series from '../Series/Series'


const Home=({vidinform})=>{  
    const [setdata,usedata]=useState(1);
    const [play,pause]=useState(false);
    const [info,setinfo]=useState("MONEY HEIST")
    const [movie,setmovie]=useState("A criminal mastermind who goes by The Professor has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose...");
    return (
         <div className="home">
        <Navbar/>
        <Photo setdata={setdata} info={info} movie={movie} play={play} pause={pause} vidinform={vidinform} />
        <Series usedata={usedata} setinfo={setinfo} setmovie={setmovie}  pause={pause}  />
        </div>
    )
}

export default Home;