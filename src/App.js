import logo from './amazon.png';
import React, {Component} from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductReview from './ProductReview/ProductReview';
import TopNav from './Topbar/TopNav';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
    showHeartBeatSection: false 
  }

  render(){
  return(
    <div className="App">
        <TopNav/>
      <div className={classes.MainContainer}>
          <ProductReview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection}/>
          <ProductDetails data = {this.state.productData}/>
      </div>
    </div>
  );
};
}

export default App;
