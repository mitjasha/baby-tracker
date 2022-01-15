import React from "react";
import SideBar from "../common/SideBar/SideBar";
// import { Link } from "react-router-dom";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import Button from "../common/Button/Button";
import "./Header.css";

const Header: React.FC = () => (
  <header className="header">
    {/* <Navbar collapseOnSelect expand="xxl" className="header-nav">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <NavDropdown title="Ребенок" id="collasible-nav-dropdown" className="header-nav-collapse">
        <NavDropdown.Item href="#action/3.1" className="header-nav-collapse">
          <Navbar.Brand href="#home">Полина</Navbar.Brand>
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          <Navbar.Brand href="#home">Андрей</Navbar.Brand>
        </NavDropdown.Item>
      </NavDropdown>

      <div className="header-user"></div>
      <div className="settings">
        <Link to="/settings" className="settings-cog-btn" id="settings">
          settings
        </Link>
      </div>
      <Navbar.Collapse id="responsive-navbar-nav" className="header-nav-collapse">
        <Nav className="mr-auto">
          <Button onClick={() => onclick}>Сон</Button>
          <Nav.Link href="#pricing">Кормление</Nav.Link>
          <Nav.Link href="#pricing">Активности</Nav.Link>
          <Nav.Link href="#pricing">Статистика</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}
    {/* <div className="back ">
      <Link to="/" className="back-btn" id="back">
        back
      </Link>
    </div> */}
    <SideBar></SideBar>
  </header>
);

export default Header;
