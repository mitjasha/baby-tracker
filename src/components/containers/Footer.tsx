import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <Link to={"/about"}>
        <div className="nik-github">
          Mars <br /> Mission TEAM
        </div>
      </Link>

      <div>©2021</div>
      <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
        <div className="logo-RS-School" />
        <p>RSS</p>
      </a>
    </div>
  </footer>
);

export default Footer;
