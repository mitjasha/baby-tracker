import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => (
  <footer>
    <div className="footer-content">
      <div className="nik-github">Mars Mission TEAM</div>
      <div>©2021</div>
      <Link to="https://rs.school/js/" target="_blank" rel="noreferrer">
        <div className="logo-RS-School"/>
      </Link>
    </div>
  </footer>
);
