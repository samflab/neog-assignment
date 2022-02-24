import React, {useState} from "react";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

export default function Router(){
    const [route, setRoute] = useState(<Home/>)
    const clickHandler = (r) => setRoute(r)
    return(
        <div>
            <button onClick={()=>clickHandler(<Home/>)}>Home</button>
            <button onClick={()=>clickHandler(<About/>)}>About</button>
            <button onClick={()=>clickHandler(<Profile/>)}>Profile</button>
            {route}
        </div>
    )
}