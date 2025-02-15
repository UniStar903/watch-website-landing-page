import React from 'react';
import classes from './ProductReview.module.css';

const ProductReview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMin = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return(
        <div className={classes.ProductReview}>
            <img src={props.currentPreviewImage} alt ="wrist watch"></img>
            {props.showHeartBeatSection ?
            <div className={classes.HeartBeatSection}>
                <i class="fas fa-heartbeat"></i>
                <p>78</p>
            </div> :
            <div className={classes.TimeSection}>
                <p>{`${currentHour}:${currentMin}`}</p>
            </div>}
        </div>
    );
}

export default ProductReview;