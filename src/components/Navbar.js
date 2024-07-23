import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Characters List</Link></li>
      <li><Link to="/locations">Characters By Location</Link></li>
    </ul>
  </nav>
);

export default Navbar;
