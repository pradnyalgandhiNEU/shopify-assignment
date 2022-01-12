import React from "react";
import LikeButton from "./LikeButton";
import classes from './Photo.module.css';

const Photo = props => {
    return (
        <div className={classes.photo}>
            <h2>{props.title}</h2>
            <img src={props.imageUrl} alt="Rover Images" height="200px" width="80%" />
            <p className={classes.date}>Date Taken: {props.date}</p>
            <LikeButton />
        </div>
    )
};

export default Photo;