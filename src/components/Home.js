import React,{useEffect,useState} from 'react';
import xbanner from './images/fishop-banner.jpg';

import Collectionlist from './Collectionlist';
import Weekhighlight from './Weekhighlight';

const Home = () =>{
    return(
        <div>
            <div>
                <img src={xbanner} className="image-big-banner" />
            </div>

            <div className="container">
                <Collectionlist/>
                <Weekhighlight/>  
            </div>



        </div>
    )
}

export default Home;