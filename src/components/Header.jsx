import React from "react";

function Header() {
  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <h1>dwitter</h1>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-orange-600">About</a>
            <a href="#" className="hover:text-orange-600">Profile</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;