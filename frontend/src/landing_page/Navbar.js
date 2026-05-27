
import React from "react";
import { Link } from "react-router-dom";

const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

const getDashboardUrl = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return DASHBOARD_URL;
  }

  const dashboardUrl = new URL(DASHBOARD_URL);
  dashboardUrl.searchParams.set("token", token);
  return dashboardUrl.toString();
};

function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            className="w-32 object-contain"
          />
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          
          <li>
            <Link
              to="/signup"
              className="hover:text-blue-600 transition duration-200"
            >
              Signup
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 transition duration-200"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/product"
              className="hover:text-blue-600 transition duration-200"
            >
              Product
            </Link>
          </li>

          <li>
            <Link
              to="/pricing"
              className="hover:text-blue-600 transition duration-200"
            >
              Pricing
            </Link>
          </li>


          <li>
            <Link
              to="/support"
              className="hover:text-blue-600 transition duration-200"
            >
              Support
            </Link>
          </li>

          <li>
            <a
              href={getDashboardUrl()}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm"
            >
              Dashboard
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

