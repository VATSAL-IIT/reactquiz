import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
  return(
  <div className="footer">
      Made by {}
      <Link style={{cursor:"pointer"}} to=""></Link>
  </div>
  )
};

export default Footer;
