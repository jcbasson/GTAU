import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = () => {

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          GTAU
        </Link>
      </div>
    </nav>
  );
};

export default Header;
