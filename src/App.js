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
    // currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
    currentPreviewImagePos: 0,
    // showHeartBeatSection: false 
    currentSelectedFeature: 0
  }

  // onColorOptionClick =(pos)=>{
  //   const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl;
  //   this.setState({currentPreviewImage: updatedPreviewImage});
  // }
  onColorOptionClick =(pos)=>{
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick =(pos)=>{
    // let updatedState = false;
    // if(pos ===1){
    //   updatedState = true;
    // }
    // this.setState({showHeartBeatSection: updatedState});
    // this.setState({showHeartBeatSection: pos});
    this.setState({currentSelectedFeature: pos});
  }

  render(){
  return(
    <div className="App">
        <TopNav/>
      <div className={classes.MainContainer}>
          {/* <ProductReview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection}/> */}
          <ProductReview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
          //  showHeartBeatSection={this.state.showHeartBeatSection}/>
           currentSelectedFeature={this.state.currentSelectedFeature}/>
          <ProductDetails data = {this.state.productData} onColorOptionClick={this.onColorOptionClick} 
           currentPreviewImagePos={this.state.currentPreviewImagePos}
           onFeatureItemClick={this.onFeatureItemClick}
          //  showHeartBeatSection={this.state.showHeartBeatSection}/>
           currentSelectedFeature={this.state.currentSelectedFeature}/>
      </div>
    </div>
  );
};
}

export default App;
