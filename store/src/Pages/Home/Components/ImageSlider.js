// create an image slider that rotates through all product images
// do i need to create a function that combines the individual category image arrays?
// what if i have multiple photos per product and dont want to show a jumpers pocket or something?





// Main Image Slider

// import libraries
import React from 'react';

// import Images
// import ImageArrary from '';

// component
function ImageSlider() {

    //container styling
    const back = {
        height: '90vh',
        width: '100vw',
        background: 'black',
    }

    //image size 
    const image = {
        height: '70vh',
        width: '80vw',
    }

    //render
    return (
        <div className="containr" style={back}>
            <div className="container" style={image}>
                {/* <img src={ImageArray}></img> */}
            </div>
        </div>
    )
}

// export component
export default ImageSlider;