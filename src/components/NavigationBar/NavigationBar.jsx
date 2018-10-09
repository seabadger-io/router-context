import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

export default (props) => (
  <nav className="NavigationBar">
    <Link to="/">{props.title}</Link>
    <Link to="/about">About</Link>
  </nav>
);
