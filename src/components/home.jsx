import React, { useEffect } from "react";
import Brownie1 from "../../public/assets/Brownie1.png";
import Brownie3 from "../../public/assets/Brownie3.png";
import styled from "styled-components";
import {
  Main,
  Section,
  WelcomeSection,
  Overlay,
  Button,
  FadeIn,
  Article,
  StyledH2,
  StyledH3,
} from "./StyledComponents";

const ActivitiesOverview = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const TestimonialsBlockquote = styled.blockquote`
  font-style: italic;
  border-left: 4px solid #a460a3;
  padding-left: 10px;
  color: #161b4e;
  display: flex;
  align-items: center;
`;

const TestimonialImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Home = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v22.0";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Welcome to our Brownies Unit!</StyledH2>
          <p>Join us for fun, friendship, and adventure!</p>
          <Button as="a" href="/join">
            Join Now
          </Button>
        </Overlay>
      </WelcomeSection>
      <Section>
        <StyledH2>What do Brownies do?</StyledH2>
        <p>
          Brownies welcomes all girls from 7 to 10 years old for nonstop fun,
          learning, and adventure. It’s full of firsts: she might grow her first
          plant, cook her first cake, put up (and take down) her first tent,
          light her first fire, or go on her first fun-packed weekend away with
          guiding friends.
        </p>
        <ActivitiesOverview>
          <FadeIn>
            <Article>
              <StyledH3>🎨 Creative Adventures</StyledH3>
              <p>
                She will explore her creative side and try exciting activities
                like building a robot or putting on a magic show.
              </p>
            </Article>
          </FadeIn>
          <FadeIn>
            <Article>
              <StyledH3>⛺ Outdoor Exploration</StyledH3>
              <p>
                Get outdoors, go on adventures, and experience nature first-hand
                with her guiding friends.
              </p>
            </Article>
          </FadeIn>
          <FadeIn>
            <Article>
              <StyledH3>🌟 Building Skills</StyledH3>
              <p>
                She’ll start learning important skills like teamwork, self-care,
                and helping others in the community.
              </p>
            </Article>
          </FadeIn>
        </ActivitiesOverview>
      </Section>
      <Section>
        <StyledH2>What our Brownies say:</StyledH2>
        <TestimonialsBlockquote>
          <TestimonialImg
            src={Brownie1}
            alt="Poonam"
            className="testimonial-img"
          />
          "I had never climbed before. I was scared of heights. But I climbed
          and rang the bell all by myself and felt really proud of myself" —
          Poonam, 8
        </TestimonialsBlockquote>
        <TestimonialsBlockquote>
          <TestimonialImg
            src={Brownie3}
            alt="Jessica"
            className="testimonial-img"
          />
          "I like doing things outside... we get to learn about our environment
          and how to care for it" — Jessica, 9
        </TestimonialsBlockquote>
      </Section>
      <Section>
        <StyledH2>Check our socials!</StyledH2>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/5th-Stowmarket-Brownies-100081302018670"
          data-tabs="timeline"
          data-width="500"
          data-height="500"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/5th-Stowmarket-Brownies-100081302018670"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/5th-Stowmarket-Brownies-100081302018670">
              5th Stowmarket Brownies
            </a>
          </blockquote>
        </div>
      </Section>
    </Main>
  );
};

export default Home;
