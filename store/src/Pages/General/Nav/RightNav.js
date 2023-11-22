import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import { useCart } from '../../Cart/CartContext';

function RightNav() {
  const { cartState } = useCart();

  return (
    <div className="ml-auto">
      <Nav>
        <Link to="/cart" className="text">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <Nav.Link as="span" className="text">
          <FontAwesomeIcon icon={faUser} />
        </Nav.Link>
        <Nav.Link as={Link} to="/" className="text">
          <FontAwesomeIcon icon={faHome} />
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default RightNav;
