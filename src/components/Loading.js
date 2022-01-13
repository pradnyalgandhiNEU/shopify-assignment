import React from "react";
import classes from './Loading.module.css';

const Loading = () => {
    return(
        <div className={classes.loading}>
            <div className={classes.loader}></div>
            <p>Loading Data</p>
        </div>
    )
};

export default Loading;