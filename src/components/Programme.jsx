import React from "react";
import {
  Main,
  WelcomeSection,
  Overlay,
  Section,
  FadeIn,
  Article,
  Button,
  StyledH2,
} from "./StyledComponents.js";
import styled from "styled-components";

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Programme = () => {
  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Girlguiding Programme</StyledH2>
          <p>Empowering girls to explore, discover, and thrive.</p>
        </Overlay>
      </WelcomeSection>
      <Section>
        <StyledH2>What is the Girlguiding Programme?</StyledH2>
        <p>
          The Girlguiding programme is designed to empower girls to explore new
          activities, develop skills, and engage in fun and adventurous
          challenges. Whether it's earning badges, going on outdoor adventures,
          or learning leadership skills, the programme is tailored to encourage
          growth and self-confidence in girls of all ages.
        </p>
      </Section>
      <ActivitiesGrid>
        <FadeIn>
          <Article>
            <StyledH2>Unit Meeting Activities (UMAs)</StyledH2>
            <p>
              UMAs are short, fun activities that Brownies do during their
              regular unit meetings. These activities can be anything from
              10-minute games to group projects that take up to 40 minutes. They
              cover a wide variety of subjects like arts and crafts, teamwork
              exercises, or fun science experiments.
            </p>
          </Article>
        </FadeIn>
        <FadeIn>
          <Article>
            <StyledH2>Skills Builders</StyledH2>
            <p>
              Skills Builders help Brownies learn important life skills like
              camping, first aid, and communication. The activities are split
              into different stages, so girls can develop at their own pace and
              grow with their friends in the Brownies section.
            </p>
          </Article>
        </FadeIn>
        <FadeIn>
          <Article>
            <StyledH2>Interest Badges</StyledH2>
            <p>
              Interest badges give Brownies the opportunity to explore a wide
              range of activities and interests, from baking and dancing to
              nature walks and creative projects. These badges allow girls to
              dive deeper into their favorite hobbies and discover new ones,
              while also earning recognition for their achievements.
              <Button href="#">Discover all Brownies interest badges</Button>
            </p>
          </Article>
        </FadeIn>
        <FadeIn>
          <Article>
            <StyledH2>Theme Awards</StyledH2>
            <p>
              Brownies can earn Theme Awards by completing UMAs and Skills
              Builders within one of the 6 key programme themes: Know Myself,
              Express Myself, Be Well, Have Adventures, Take Action, and Skills
              for My Future. As they complete theme awards, they can earn
              Bronze, Silver, and Gold awards, helping them build confidence and
              feel proud of their accomplishments.
            </p>
          </Article>
        </FadeIn>
      </ActivitiesGrid>
    </Main>
  );
};

export default Programme;
