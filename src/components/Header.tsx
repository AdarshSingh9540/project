import React from 'react';

function Header(): JSX.Element {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white font-bold text-lg" href="#">Navbar</a>
        <div className="flex">
          <a className="text-white mr-4" href="#">Home</a>
          <a className="text-white mr-4" href="#">Link</a>
          <a className="text-white" href="#">Disabled</a>
        </div>
        <form className="flex hidden sm:flex">
          <input className="px-2 py-1 border border-gray-600 rounded-l-md" type="search" placeholder="Search" aria-label="Search" />
          <button className="px-4 py-1 bg-gray-600 text-white rounded-r-md" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
