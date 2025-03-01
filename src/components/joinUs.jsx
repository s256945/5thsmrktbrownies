import React from "react";
import styled from "styled-components";
import Brownie6 from "../assets/images/Brownie6.png";
import Leader3 from "../assets/images/Leader3.png";
import {
  Main,
  Section,
  Overlay,
  Button,
  FadeIn,
  WelcomeSection,
  Article,
  StyledH2,
  StyledH3,
} from "./StyledComponents";

const JoinOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const JoinImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const StyledLinkButton = styled(Button)`
  text-decoration: none;
  display: inline-block;
  text-align: center;
  width: 100%;
  max-width: 200px;
  padding: 10px;
  font-weight: bold;

  &:focus {
    outline: 3px solid #ffc80a;
  }
`;

const Join = () => {
  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Join Us Today!</StyledH2>
          <p>Be part of the adventure and fun at Brownies!</p>
        </Overlay>
      </WelcomeSection>
      <Section>
        <StyledH2>How to Join</StyledH2>
        <p>
          Whether you want to become a Brownie or volunteer, there's a place for
          you! When registering, select 5th Stowmarket Brownies as your first
          choice, and your details will be directed to us via official channels.
        </p>
      </Section>
      <JoinOptions>
        <FadeIn>
          <Article>
            <JoinImg
              src={Brownie6}
              alt="A Brownie in uniform with a pruple hijab"
            />
            <StyledH3>🎀 Join as a Brownie</StyledH3>
            <p>
              Brownies is full of fun, learning, and adventure! Girls in Guiding
              are 23% more confident and 3x more likely to contribute to their
              community.
            </p>
            <StyledLinkButton
              as="a"
              href="https://go.girlguiding.org.uk/join-us/join-as-member/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Register your daughter as a Brownie - opens in a new tab"
            >
              Register your daughter
            </StyledLinkButton>
          </Article>
        </FadeIn>
        <FadeIn>
          <Article>
            <JoinImg src={Leader3} alt="A woman volunteer in a wheelchair" />
            <StyledH3>🤝 Join as a Volunteer</StyledH3>
            <p>
              Help all girls know they can do anything by volunteering with us.
              Make a difference and be part of the guiding community!
            </p>
            <StyledLinkButton
              as="a"
              href="https://www.girlguiding.org.uk/link/f1b25a35c49d43768df10777201c3475.aspx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Register as a volunteer for Girlguiding - opens in a new tab"
            >
              Register to volunteer
            </StyledLinkButton>
          </Article>
        </FadeIn>
      </JoinOptions>
    </Main>
  );
};

export default Join;
