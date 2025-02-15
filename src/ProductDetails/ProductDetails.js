import React from "react";
import classes from "./ProductDetails.module.css";

const ProductDetails =(props)=>{
  const colorOptions = props.data.colorOptions.map((item,pos)=>{
    const classArr = [classes.ProductImage];
    if(pos === 0){
      classArr.push(classes.SelectedProductImage);
    }
    return(
      <img key={pos} src={item.imageUrl} className={classArr.join(' ')} alt={item.styleName}></img>
    );
  })

  const productList = props.data.featureList.map((item,pos)=>{
    const classArr = [classes.FeatureItem];
    if(pos === 0){
      classArr.push(classes.SelectedFeatureItem);
    }
    return(
      <button key={pos} className={classArr.join(' ')}>{item}</button>
    );
  })
  
  
    return(
      <div className={classes.ProductData}>
        <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
              {colorOptions}
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
              <div>
                {productList}
              </div>
            <button className={classes.PrimaryButton}>Buy Now</button>
      </div>  
    );
}

export default ProductDetails;