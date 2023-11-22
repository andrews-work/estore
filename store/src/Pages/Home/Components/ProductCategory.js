import React from 'react';
import { Link } from 'react-router-dom';

function ProductCategory() {
    const getNumColumns = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 1180) {
            return 2;
        }
        return 4;
    };

    const calculateBoxWidth = () => {
        const numColumns = getNumColumns();
        return `calc(${100 / numColumns}% - ${numColumns - 1}rem)`;
    };

    const calculateBoxHeight = () => {
        // Adjust the height as needed, for example:
        return '150px';
    };

    const component = {
        background: 'white',
        color: 'navyblue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const container = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        margin: '10vh 5vw',
    };

    const box = {
        border: '2px solid grey',
        width: calculateBoxWidth(),
        height: calculateBoxHeight(),
        margin: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    };

    return (
        <div style={component}>
            <div className="container" style={container}>
                <Link as={Link} to="/pants" style={box}>
                    Pants
                </Link>
                <Link as={Link} to="/shirts" style={box}>
                    Shirts
                </Link>
                <Link as={Link} to="/shoes" style={box}>
                    Shoes
                </Link>
                <Link as={Link} to="/hats" style={box}>
                    Hats
                </Link>
            </div>
        </div>
    );
}

export default ProductCategory;
