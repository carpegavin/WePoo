import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css"
import { IconContext } from 'react-icons/lib';
import {FaHome} from 'react-icons/fa';
import {SiGooglemaps} from 'react-icons/si';
import {BsNewspaper} from 'react-icons/bs';


function Footer(){
    return(

<IconContext.Provider value={{ color: '#000000' }}>

<footer className = ".row">
<ul className = ".rowItems">
<li >
    <Link to='/' >
    <FaHome size={50}/>
    </Link>
    
</li>
<li >
    <Link to='/map' >
    <SiGooglemaps size={50}/>

    </Link>
</li>
<li >
    <Link to='/review' >
    <BsNewspaper size={50}/>

    </Link>
</li>


</ul>

</footer>
</IconContext.Provider>


    );
}

export default Footer