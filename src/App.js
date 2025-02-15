import logo from './amazon.png';
import React, {Component} from 'react';
import classes from './App.module.css';
import ProductData from './ProductData';
import ProductDetails from './ProductDetails';
import ProductReview from './ProductReview';
import TopNav from './TopNav';

class App extends Component {
  state = {
    productData: ProductData
  }

  render(){
  return(
    <div className="App">
        <TopNav/>
      <div className={classes.MainContainer}>
          <ProductReview/>
          <ProductDetails data = {this.state.productData}/>
      </div>
    </div>
  );
};
}

export default App;
