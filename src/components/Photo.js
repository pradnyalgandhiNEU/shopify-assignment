import React from "react";
import classes from './Photo.module.css';

const Photo = props => {
    return (
        <li className={classes.photo}>
            <h2>{props.title}</h2>
            <img src={props.imageUrl} alt="Rover Images" height="200px" width="50%" />
            <p>{props.date}</p>
            <button className={classes['like-button']}>Like</button>
        </li>
    )
};

export default Photo;