import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import "../Styles/Navbar.css"
const Navbar = () => {
    const companyLogo = "../"
  return (
    <Router>
      <div className="navbar">
        <Link to="/" className="nav-link">
          <img src="../Assets/logo.png" alt="Company Logo" className="logo" />
          Company Name
        </Link>
        <input type="text" placeholder="Search" className="search-bar" />
        <ul className="nav-links">
          <li>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li>
            <Link to="/departments" className="nav-link">Departments</Link>
          </li>
          <li>
            <Link to="/profile" className="nav-link">Profile</Link>
          </li>
          <li>
            <Link to="/options" className="nav-link">Options</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/options" element={<Options />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </Router>
  );
};

const Dashboard = () => <h2>Dashboard</h2>;
const Products = () => <h2>Products</h2>;
const Departments = () => <h2>Departments</h2>;
const Profile = () => <h2>Profile</h2>;
const Options = () => <h2>Options</h2>;

export default Navbar;
