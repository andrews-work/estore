import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { CartProvider } from '../../Cart/CartContext';
import LeftNav from './LeftNav';
import CenterNav from './CenterNav';
import RightNav from './RightNav';

function Navmenu() {
  return (
    <CartProvider>
      <Navbar bg="dark" expand="xl" sticky="top" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="white-hamburger-menu" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="container-fluid">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-4">
                <LeftNav />
              </div>
              <div className="col-4 text-center">
                <CenterNav />
              </div>
              <div className="col-4 text-right">
                <RightNav />
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </CartProvider>
  );
}

export default Navmenu;
