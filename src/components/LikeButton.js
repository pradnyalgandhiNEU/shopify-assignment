import React, { useState } from "react";
import classes from './LikeButton.module.css';

const LikeButton = props =>{
    const [isLiked, setIsLiked] = useState(false);
    
    const clickHandler = () => {
        if(!isLiked){
            setIsLiked(true);
        }
        else{
            setIsLiked(false);
        }
    };
    const cls = `${classes['like-button']} ${isLiked? classes.liked: ""}`
    return(
        <button className={cls} onClick={clickHandler}>Like</button>
    )
};

export default LikeButton;