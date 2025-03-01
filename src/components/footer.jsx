import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.png";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ffc80a;
  padding: 10px 20px;
  text-align: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  flex-grow: 1;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
`;

const Footer = () => {
  return (
    <FooterContainer aria-label="Website footer">
      <a href="/" aria-label="Go to homepage">
        <LogoImage src={Logo} alt="5th Stowmarket Brownies Logo" />
      </a>
      <FooterText>
        © 2025 5th Stowmarket Brownies. Website created by Amy Jordan.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
