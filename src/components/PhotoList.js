import React from "react";
import Photo from './Photo';
import classes from './PhotoList.module.css';

const PhotoList = props => {
    return (
        <ul className={classes['photo-list']}>
            {props.photos.map((photo) => (
                <Photo key={photo.id} title={photo.title} imageUrl={photo.imageUrl} date={photo.date} />
            ))}
            
            
        </ul>
    )
};

export default PhotoList;