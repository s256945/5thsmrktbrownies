import React from "react";
import {
  Main,
  WelcomeSection,
  Overlay,
  Section,
  FadeIn,
  Article,
  Button,
} from "./StyledComponents.js";
import styled from "styled-components";

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const resources = [
  {
    title: "Meeting Planner",
    description: "A simple template to organize meetings.",
  },
  {
    title: "Badge Tracker",
    description: "A spreadsheet to track badge progress.",
  },
  {
    title: "Activity Ideas",
    description: "Engaging activities for Brownie groups.",
  },
  {
    title: "Outdoor Challenges",
    description: "Fun tasks for outdoor learning.",
  },
  { title: "Craft Guides", description: "Easy-to-follow craft activities." },
  { title: "Themed Meetings", description: "Ideas for special event nights." },
];

const Resources = () => {
  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <h2>Unit resources!</h2>
          <p>Resources made for Brownie leaders</p>
        </Overlay>
      </WelcomeSection>
      <Section>
        <h2>Available Resources</h2>
        <p>
          Here are the resources I've made for my Brownies unit. Please feel
          free to download our resources and ideas and adapt them to suit your
          needs.
        </p>
        <ActivitiesGrid>
          {resources.map((resource, index) => (
            <FadeIn key={index}>
              <Article>
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
                <Button>Download</Button>
              </Article>
            </FadeIn>
          ))}
        </ActivitiesGrid>
      </Section>
    </Main>
  );
};

export default Resources;
