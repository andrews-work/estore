// does the main <div> need a className of home?
// header
// nav
// sale
// productcategory
// image slider
// footer

// Home Page

// import libraries
import React from 'react';

// import components
import Header from '../General/Header';
import Navmenu from '../General/Nav/Nav';
import Footer from '../General/Footer';

import ProductCategory from './Components/ProductCategory';
import Sale from './Components/Sale';
import ImageSlider from './Components/ImageSlider';

// component
function Home() {

  //render
  return (
    <div className="home" >
        <Header />
        <Navmenu /> 
        <ProductCategory />
        <Sale />
        <ImageSlider />
        <Footer />
    </div>
  );
}

// export component
export default Home;