import React from "react";
import styled from "styled-components";
import Brownie6 from "../../public/assets/images/Brownie6.png";
import Leader3 from "../../public/assets/images/Leader3.png";
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
          Whether you want to become a Brownie or volunteer, there&apos;s a
          place for you! When registering, select 5th Stowmarket Brownies as
          your first choice, and your details will be directed to us via
          official channels.
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
              Non-stop fun, friendships and adventure! Girls aged 11-18 in
              guiding are, on average, 28% more confident and 15% happier than
              UK girls.
            </p>
            <Button
              as="a"
              href="https://go.girlguiding.org.uk/join-us/join-as-member/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Register your daughter as a Brownie - opens in a new tab"
            >
              Register your daughter
            </Button>
          </Article>
        </FadeIn>
        <FadeIn>
          <Article>
            <JoinImg src={Leader3} alt="A woman volunteer in a wheelchair" />
            <StyledH3>🤝 Join as a Volunteer</StyledH3>
            <p>
              Ready to inspire girls aged 7 to 10? It&apos;s a world of firsts you
              can explore together! You’ll have the chance to develop your
              leadership skills and help girls to have lots of fun trying out
              new adventures
            </p>
            <Button
              as="a"
              href="https://www.girlguiding.org.uk/link/f1b25a35c49d43768df10777201c3475.aspx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Register as a volunteer for Girlguiding - opens in a new tab"
            >
              Register to volunteer
            </Button>
          </Article>
        </FadeIn>
      </JoinOptions>
    </Main>
  );
};

export default Join;
