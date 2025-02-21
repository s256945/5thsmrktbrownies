import React from "react";
import styled from "styled-components";
import Brownie6 from "../../public/assets/Brownie6.png";
import Leader3 from "../../public/assets/Leader3.png";
import Footer from "./footer.jsx";
import {
  Main,
  Section,
  Overlay,
  Button,
  FadeIn,
  WelcomeSection,
  Article,
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
          <h2>Join Us Today!</h2>
          <p>Be part of the adventure and fun at Brownies!</p>
        </Overlay>
      </WelcomeSection>
      <Section>
        <h2>How to Join</h2>
        <p>
          Whether you want to become a Brownie or volunteer, there's a place for
          you!
        </p>
      </Section>
      <JoinOptions>
        <FadeIn>
          <Article>
            <JoinImg src={Brownie6} alt="Brownie Girl" />
            <h3>🎀 Join as a Brownie</h3>
            <p>
              Brownies is full of fun, learning, and adventure! Girls in Guiding
              are 23% more confident and 3x more likely to contribute to their
              community.
            </p>
            <Button
              as="a"
              href="https://go.girlguiding.org.uk/join-us/join-as-member/"
            >
              Register your daughter
            </Button>
          </Article>
        </FadeIn>
        <FadeIn>
          <Article>
            <JoinImg src={Leader3} alt="Volunteer Helping" />
            <h3>🤝 Join as a Volunteer</h3>
            <p>
              Help all girls know they can do anything by volunteering with us.
              Make a difference and be part of the guiding community!
            </p>
            <Button
              as="a"
              href="https://www.girlguiding.org.uk/link/f1b25a35c49d43768df10777201c3475.aspx"
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
