// LeftNav.js
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

function LeftNav() {
  const navLinks = [
    { to: '/pants', text: 'Pants' },
    { to: '/shirts', text: 'Shirts' },
    { to: '/shoes', text: 'Shoes' },
    { to: '/hats', text: 'Hats' },
  ];

  return (
    <Nav>
      {navLinks.map((link, index) => (
        <Nav.Link as={Link} to={link.to} className="text" key={index}>
          {link.text}
        </Nav.Link>
      ))}
    </Nav>
  );
}

export default LeftNav;
