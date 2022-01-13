import React, { useState } from "react";
import classes from './LikeButton.module.css';
import Heart from "react-animated-heart";

const LikeButton = props =>{
    const [isClick, setClick] = useState(false);
    
    return(
        <div className={classes.like}>
            <h3>LEAVE A LIKE:</h3>
            <Heart isClick={isClick} onClick={() => setClick(!isClick)}/>
        </div>
        
    )
};

export default LikeButton;