import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #603d33;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Heading = styled.h1`
  color: #fff;
  margin: 0;
  font-size: 1.8rem;
`;

const NavBar = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 5px;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  a:hover,
  a:focus {
    background-color: #ef7b00;
    color: #fff;
  }

  .active {
    background-color: #ef7b00;
    font-weight: bold;
  }
`;

const Header = () => {
  const menuItems = [
    { to: "/", label: "🏠 Home" },
    { to: "/join", label: "🤝 Join Us" },
    { to: "/parents", label: "👪 Parents" },
    { to: "/programme", label: "🎉 Programme" },
    { to: "/resources", label: "🗂️ Resources" },
    { to: "/contact", label: "📬 Contact" },
  ];

  return (
    <StyledHeader>
      <Heading>5th Stowmarket Brownies</Heading>
      <NavBar aria-label="Main navigation">
        <ul>
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                aria-current={
                  window.location.pathname === item.to ? "page" : undefined
                }
                aria-label={`Go to ${item.label.replace(/[^a-zA-Z ]/g, "").trim()} page`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </NavBar>
    </StyledHeader>
  );
};

export default Header;
