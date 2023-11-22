// pick one item from each category and put it on sale?
// write code that if inventory above 10, item goes on sale till >5 of item available
// display - image, title, %off, before and after price
// cycle through images?



// Sale promotion

// import libraries
import React from 'react';

// import images
// import sale from '../../Pants/Images/product1.png';

// component
function Sale() {

    // container style
    const sale = {
        height: '70vh',
        width: '100vw',
        background: 'grey',
    }

    // render
    return (
            <div style={sale}>
                <>
                    <div className="container">
                        {/* <img src={sale}></img> */}
                        <h1>20% off</h1>
                        <button>view</button>
                    </div>
                    <div className="container">
                    {/* <img src={sale}></img> */}
                        <h1>20% off</h1>
                        <button>view</button>
                    </div>
                    <div className="container">
                    {/* <img src={sale}></img> */}
                        <h1>20% off</h1>
                        <button>view</button>
                    </div>

                    <div>
                        <h1>to do</h1>
                        <p>stripe payment processing</p>
                        <p>navbar layout</p>
                        <p>cart modal</p>
                        <p>images for items</p>
                        <p>layout of product pages</p>
                        <p>search bar </p>
                        <p>sale bar</p>
                        <p>image slideshow</p>
                        <p>user login, previous orders, invoices, account settings - delte account, change email, password etc</p>
                    </div>
                </>
            </div>
    )
}

// export component
export default Sale;