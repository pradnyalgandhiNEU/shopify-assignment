import React from "react";
import Photo from './Photo';
import classes from './PhotoList.module.css';

const PhotoList = props => {
    return (
        <div className={classes['photo-list']}>
            {props.photos.map((photo) => (
                <Photo key={photo.id} title={photo.title} name={photo.rover} sol={photo.sol} imageUrl={photo.imageUrl} date={photo.date} />
            ))} 
        </div>
    )
};

export default PhotoList;