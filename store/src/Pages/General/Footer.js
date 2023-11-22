// Footer

// import libraries
import React from 'react';

//component
function Footer() {

  // container styling
  const foot = {
    height: '10vh',
    width: '100vw',
    background: 'blue',
  }

  // render
  return (
      <div style={foot}>
        <h1 className="fs-6">Footer</h1>
      </div>
  );
}

// export component
export default Footer;
