import React from "react";
import LikeButton from "./LikeButton";
import classes from './Photo.module.css';

const Photo = props => {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const dates = props.date.split("-");
    const date = `${months[+dates[1]-1]} ${dates[2]}, ${dates[0]}`;
    
    return (
        <div className={classes.photo}>
            <h2>{props.name} Rover</h2>
            <img src={props.imageUrl} alt="Rover Images" height="300px" width="90%" />
            <h3>{props.title}</h3>
            <p className={classes.date}>This photo was captured on {date} by the {props.title} camera on Sol {props.sol}</p>
            <LikeButton />
        </div>
    )
};

export default Photo;