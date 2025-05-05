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
    file: "/assets/files/safeguarding-info.pdf"
  },
  {
    title: "New Starter Pack",
    description:
      "Information for new Brownie parents to help them understand what Brownies is all about.",
    file: "/assets/files/new-starter.pdf",
  },
  {
    title: "Meeting Planner",
    description:
      "A simple template to organise weekly meetings, including date, activity, and materials needed.",
    file: "/assets/files/term-plan.pdf",
  },
  {
    title: "VE Day 80th Anniversary Activities",
    description: "Download instructions for engaging crafts and games to commemorate the 80th anniversary of VE Day with your unit.",
    file: "/assets/files/ve-day.pdf",
  }
  // {
  //   title: "Badge Tracker",
  //   description:
  //     "A spreadsheet to track activity progress so you can see when your unit last did each UMA/SB.",
  //   file: "",
  // },
  // {
  //   title: "Games",
  //   description:
  //     "Some of the games I've played with my units, complete with instructions and resources needed.",
  //   file: "",
  // },
  // {
  //   title: "Interest Badge Worksheets",
  //   description:
  //     "Worksheets for Interest Badges that meet the required criteria.",
  //   file: "",
  // },
  // {
  //   title: "Craft Guides",
  //   description:
  //     "Easy-to-follow craft activities with pictures, instructions, and materials lists.",
  //   file: "",
  // },
  // {
  //   title: "Themed Meetings",
  //   description: "Ideas for special event nights and pack holidays.",
  //   file: "",
  // },
];

const Resources = () => {
  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Unit Resources!</StyledH2>
          <p>Resources made for Brownie leaders</p>
        </Overlay>
      </WelcomeSection>
      <Section>
        <StyledH2>Available Resources</StyledH2>
        <p>
          Here are the resources I&apos;ve made for my Brownies unit. Feel free to
          download and adapt them to suit your needs.
        </p>
      </Section>
      <ActivitiesGrid>
        {resources.map((resource, index) => (
          <FadeIn key={index}>
            <Article>
              <StyledH3>{resource.title}</StyledH3>
              <p>{resource.description}</p>
              <Button
                as="a"
                href={resource.file}
                download
                aria-label={`Download ${resource.title}`}
              >
                Download
              </Button>
            </Article>
          </FadeIn>
        ))}
      </ActivitiesGrid>
    </Main>
  );
};

export default Resources;
