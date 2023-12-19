import React from "react";
import brandIcon from "../../assets/images/OCR.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="p-4">
        <div className="container mx-auto lg:w-4/5 xl:w-3/4  pt-4 md:pt-15 flex items-center justify-between">
          <a href="/">
            <img
              src={brandIcon}
              alt="OCR"
              style={{ height: "27px", width: "auto" }}
            />
          </a>
          <div className="flex md:gap-x-10 justify-around gap-x-5">
            <button className="nav-link-style">
              <Link to="alljobs">Circulars</Link>
            </button>
            <button className="nav-link-style">
              <Link to="appliedJobs">Applied Jobs</Link>
            </button>
            <button className="nav-link-style">
              <Link to="blogs">Blog</Link>
            </button>
            <button className="nav-link-style">
              <Link to="signin">Login</Link>
            </button>
          </div>
          <div className="flex items-center">
            <button className="button-style-1 hidden md:block">
              <Link to="/alljobs">Start Applying</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
