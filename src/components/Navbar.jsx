import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav>
            <h1 className="title">
        <Link to="/">MovieDb</Link>
  
      </h1>
      
    </nav>
  );
};

export default Navbar;
