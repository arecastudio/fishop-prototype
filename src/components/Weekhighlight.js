import React from 'react';
import weeklyimg from './images/weekly-item.jpg'

const Weekhighlight=()=>{
    return(
        <div className="whighlight">
            <div className="item-weekly" >
            <img src={weeklyimg} alt=".." className="img-weekly"/>
            </div>
        <div className="item-weekly" >
                <h3>THIS WEEK'S HIGHLIGHT</h3>
                <p className="weekly-desc">
                Good Food brings in Good Talk.
Enjoy our crunchy Croquettes with your partners in crime 👫

Comes in 5 variants, and starts from IDR 25.000, try them out! 
<ul>
    <li>Croquette Hotate and Cream Cheese</li>
    <li>Croquette Cream Cheese</li>
    <li>Croquette Potato Curry</li>
    <li>Croquette Potato Corn</li>
    <li>Croquette Potato Edamame</li>
</ul>
                </p>
                <div>
                    <button>ORDER NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Weekhighlight;