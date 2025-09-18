import React from 'react';
import { Link } from 'react-router-dom';

import './style/HomePage.css'; // ✨ Import from style folder

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Bookstore</h1>
      <p>Discover your next great read!</p>
      <Link to="/books">Go to Book List</Link>
    </div>
  );
};


export default HomePage;
