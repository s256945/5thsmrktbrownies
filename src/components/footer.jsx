import React from "react";
import styled from "styled-components";
import Logo from "../../public/assets/images/logo.png";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: #ffc80a;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  flex-grow: 1;
  margin: 5px;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 5px;

  a {
    font-size: 0.85rem;
    color: #5a3d1b;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: #000000;
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer aria-label="Website footer">
      <a href="/" aria-label="Go to homepage">
        <LogoImage src={Logo} alt="5th Stowmarket Brownies Logo" />
      </a>
      <FooterText as="div">
        <p>© 2025 5th Stowmarket Brownies. Website created by Amy Jordan.</p>
        <FooterLinks>
          <a href="/join">Join</a>
          <a href="/programme">Programme</a>
          <a href="/resources">Resources</a>
          <a href="/contact">Contact</a>
          <small>
            <a
              href="https://www.girlguiding.org.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Girlguiding UK
            </a>
          </small>
        </FooterLinks>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
