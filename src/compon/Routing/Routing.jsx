import {useState} from 'react';
import Home from '../Home/Home'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Videoplayer from '../Videoplayer/Videoplayer';
import Movies from '../Movies/Movies';
import Movist from '../Movist';

const Routing=()=>{
    const [inform,vidinform]=useState(1);
    const [movi,moviedata]=useState("");
   return(<div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={()=><Home vidinform={vidinform}/>} />
                <Route exact  path="/Videoplayer" component={()=><Videoplayer inform={inform}/>}/>
                <Route exact path="/Movies"><Movies moviedata={moviedata}/></Route>
                <Route exact path="/Movist" component={()=><Movist movi={movi}/>}/>
            </Switch>
        </BrowserRouter>
    </div>
    )
}
export default Routing;