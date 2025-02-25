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
  StyledH3,
} from "./StyledComponents.js";
import styled from "styled-components";

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const resources = [
  {
    title: "Safeguarding/info sheets",
    description:
      "Information sheets with important safeguarding help/advice taken directly from the Girlguiding website.",
    file: "",
  },
  {
    title: "New starter pack",
    description:
      "Information I give to new Brownie parents to help them understand what Brownies is all about.",
    file: "/files/new-starter.pdf",
  },
  {
    title: "Meeting Planner",
    description:
      "A simple template to organise weekly meetings. Includes date, name of activity, and materials needed.",
    file: "",
  },
  {
    title: "Badge Tracker",
    description:
      "A spreadsheet to track activity progress so you can see when your unit last did which UMA/SB",
    file: "",
  },
  {
    title: "Games",
    description:
      "Some of the games I've played with my units with the instructions and resources needed.",
    file: "",
  },
  {
    title: "Interest Badge Worksheets",
    description:
      "Worksheets for Interest Badges which meet the required criteria.",
    file: "",
  },
  {
    title: "Craft Guides",
    description:
      "Easy-to-follow craft activities. Complete with pictures, instructions, and materials needed.",
    file: "",
  },
  {
    title: "Themed Meetings",
    description: "Ideas for special event nights and pack holidays.",
    file: "",
  },
];

const Resources = () => {
  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Unit resources!</StyledH2>
          <p>Resources made for Brownie leaders</p>
        </Overlay>
      </WelcomeSection>
      <Section>
        <StyledH2>Available Resources</StyledH2>
        <p>
          Here are the resources I've made for my Brownies unit. Please feel
          free to download our resources and ideas and adapt them to suit your
          needs.
        </p>
      </Section>
      <ActivitiesGrid>
        {resources.map((resource, index) => (
          <FadeIn key={index}>
            <Article>
              <StyledH3>{resource.title}</StyledH3>
              <p>{resource.description}</p>
              <a href={resource.file} download>
                <Button>Download</Button>
              </a>
            </Article>
          </FadeIn>
        ))}
      </ActivitiesGrid>
    </Main>
  );
};

export default Resources;
