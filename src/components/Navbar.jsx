import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex flex-start border-2 bg-blue-500 p-4 text-white">
      <nav className="ml-6 text-2xl font-bold">
        <Link to="/">WikiCountries</Link>
      </nav>
    </div>
  );
}

export default Navbar;
