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
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const activityData = [
  {
    alt: "UMA Activities",
    title: "🎨 Unit Meeting Activities (UMAs)",
    description:
      "UMAs are short, fun activities that Brownies do during their regular unit meetings. These activities can be anything from 10-minute games to group projects that take up to 40 minutes. They cover a wide variety of subjects like arts and crafts, teamwork exercises, or fun science experiments.",
    link: "https://www.girlguiding.org.uk/what-we-do/our-badges-and-activities/programme-for-every-girl/what-girls-do-programme/#UMAs",
    buttonLabel: "Discover Brownies UMAs",
  },
  {
    alt: "Skills Builders",
    title: "🪛 Skills Builders",
    description:
      "Skills Builders help Brownies learn important life skills like camping, first aid, and communication. The activities are split into different stages, so girls can develop at their own pace and grow with their friends in the Brownies section.",
    link: "https://www.girlguiding.org.uk/what-we-do/our-badges-and-activities/badge-finder/?SearchForm.Text=&SearchForm.GuidingSectionId=54&SearchForm.TypeId=113&SearchForm.ThemeId=&SearchForm.PageNumber=1&SearchForm.Order=Relevance",
    buttonLabel: "Discover Stages 2 & 3 Skills Builders",
  },
  {
    alt: "Interest Badges",
    title: "🏅 Interest Badges",
    description:
      "Interest badges give Brownies the opportunity to explore a wide range of activities and interests, from baking and dancing to nature walks and creative projects. These badges allow girls to dive deeper into their favorite hobbies and discover new ones, while also earning recognition for their achievements.",
    link: "https://www.girlguiding.org.uk/what-we-do/our-badges-and-activities/badge-finder/?SearchForm.Text=&SearchForm.GuidingSectionId=54&SearchForm.TypeId=104&SearchForm.ThemeId=&SearchForm.PageNumber=1&SearchForm.Order=Relevance",
    buttonLabel: "Discover Brownies Interest Badges",
  },
  {
    alt: "Theme Awards",
    title: "🏆 Theme Awards",
    description:
      "Brownies can earn Theme Awards by completing UMAs and Skills Builders within one of the 6 key programme themes: Know Myself, Express Myself, Be Well, Have Adventures, Take Action, and Skills for My Future. As they complete theme awards, they can earn Bronze, Silver, and Gold awards, helping them build confidence and feel proud of their accomplishments.",
    link: "https://www.girlguiding.org.uk/what-we-do/our-badges-and-activities/badge-finder/brownie-theme-awards/",
    buttonLabel: "Discover Brownies Theme Awards",
  },
  {
    alt: "Outdoor Adventures",
    title: "🏕️ Outdoor Adventures",
    description:
      "Brownies love exploring the outdoors! From nature walks and treasure hunts to overnight camping trips, these activities encourage teamwork, problem-solving, and respect for the environment. Outdoor adventures help girls build confidence while having tons of fun.",
    link: "https://www.girlguiding.org.uk/what-we-do/our-badges-and-activities/adventure-badges/",
    buttonLabel: "Explore Outdoor Adventures",
  },
  {
    alt: "Brownie Awards",
    title: "🌟 Brownie Awards & Milestones",
    description:
      "As Brownies progress, they can earn special awards like the Bronze, Silver, and Gold Awards—the highest recognitions in the section. These milestones celebrate their hard work, growth, and dedication to the Girlguiding values.",
    link: "https://www.girlguiding.org.uk/what-we-do/our-badges-and-activities/badge-finder/brownie-gold-award/",
    buttonLabel: "See Brownie Awards",
  },
];

const Programme = () => {
  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Girlguiding Programme</StyledH2>
          <p>Empowering girls to explore, discover, and thrive</p>
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
        {activityData.map(({ alt, title, description, link, buttonLabel }) => (
          <FadeIn key={title}>
            <Article>
              <StyledH3>{title}</StyledH3>
              <p>{description}</p>
              <Button
                as="a"
                href={link}
                aria-label={`Learn more about ${title}`}
              >
                {buttonLabel}
              </Button>
            </Article>
          </FadeIn>
        ))}
      </ActivitiesGrid>
    </Main>
  );
};

export default Programme;
