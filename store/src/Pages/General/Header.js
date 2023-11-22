// Header

// import libraries
import React from 'react';
import { Link } from 'react-router-dom';

// component
function Header() {

    // container style
    const headerStyle = {
        width: '100vw',
        height: '15vh',
        textDecoration: 'none',
        color: 'black',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    
    // text style
    const h1Style = {
        color: 'black',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
    };
    
    // render 
    return (
        <Link to="/" style={headerStyle} className="custom-container">
            <div className="row">
                <div className="d-flex flex-column justify-content-center">
                    <h1 style={h1Style}>Skeezer</h1>
                </div>
            </div>
        </Link>
    );
}

// export component 
export default Header;
