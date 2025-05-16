import React, { useState } from "react";
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

const Burger = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavBar = styled.nav`
  @media (max-width: 767px) {
    display: ${({ open }) => (open ? "block" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #603d33;
    padding: 10px 0;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  li {
    position: relative;
    display: flex;
    align-items: center;
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

  .dropdown-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 5px;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
    height: 100%;
    line-height: 1;
    cursor: pointer;
  }

  .dropdown-toggle:hover,
  .dropdown-toggle:focus {
    background-color: #ef7b00;
    color: #fff;
  }

  .dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #603d33;
    padding: 5px 0;
    list-style: none;
    min-width: 150px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  li:hover > .dropdown,
  .dropdown-toggle:focus + .dropdown {
    display: block;
  }

  .dropdown li a {
    display: block;
    padding: 8px 12px;
    color: #fff;
  }

  .dropdown li a:hover {
    background-color: #ef7b00;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "🏠 Home" },
    { to: "/join", label: "🤝 Join Us" },
    { to: "/parents", label: "👪 Parents" },
    { to: "/programme", label: "🎉 Programme" },
    { to: "/resources", label: "🗂️ Resources" },
    { to: "/contact", label: "📬 Contact" },
    { to: "/progress", label: "📊 Progress" },
    {
      label: "💛 Our Unit",
      submenu: [
        { to: "/about", label: "ℹ️ About the Unit" },
        { to: "/leaders", label: "👩‍🦱 Leaders" },
      ],
    },
  ];

  return (
    <StyledHeader>
      <Heading>5th Stowmarket Brownies</Heading>
      <Burger onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? "✖" : "☰"}
      </Burger>
      <NavBar aria-label="Main navigation" open={open}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.to}>
              {item.submenu ? (
                <>
                  <div className="dropdown-toggle" role="button" tabIndex={0}>
                    {item.label}
                  </div>
                  <ul className="dropdown">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.to}>
                        <NavLink
                          to={subItem.to}
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          onClick={() => setOpen(false)}
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setOpen(false)}
                  aria-label={`Go to ${item.label.replace(/[^a-zA-Z ]/g, "").trim()} page`}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </NavBar>
    </StyledHeader>
  );
};

export default Header;
