import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
const SetItem = (props) => {
    return (
        <Link 
            to={{
                pathname: "/admin/set/",
                state: {stateParam: props.setItem}
            }}
        >
        {/* <div className='TestCard test-reading'>   */}
            <div className="setItem">  
                <h2>{props.setItem.name}</h2>
            </div>
        </Link> 
    )
}
export default SetItem