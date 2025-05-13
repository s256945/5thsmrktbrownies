import React, { useEffect } from "react";
import Brownie1 from "../../public/assets/images/Brownie1.png";
import Brownie3 from "../../public/assets/images/Brownie3.png";
import styled from "styled-components";
import {
  Main,
  Section,
  WelcomeSection,
  Overlay,
  FadeIn,
  Article,
  StyledH2,
  StyledH3,
} from "./StyledComponents";

const ActivitiesOverview = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialsBlockquote = styled.blockquote`
  font-style: italic;
  border-left: 4px solid #a460a3;
  padding-left: 10px;
  color: #161b4e;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TestimonialImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const AccessibleFbEmbed = styled.div`
  iframe {
    border: none;
    max-width: 100%;
  }
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
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Welcome to our Brownies Unit!</StyledH2>
          <p>Brownies think big, be bold and try their best.</p>
        </Overlay>
      </WelcomeSection>
      <Section>
        <StyledH2>What do Brownies do?</StyledH2>
        <p>
         Brownies welcomes all girls from 7 to 10 years old having nonstop fun, learning and adventure. Brownies is full of firsts: your child can explore their creative side, get out into the great outdoors, learn how to look after themselves, others and the world we live in. They might grow their first plant, cook their first cake, put up (and take down) their first tent or go on their first fun-packed weekend away with guiding friends. There's something for every girl!
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
        <TestimonialsBlockquote aria-label="Testimonial from Poonam, aged 8">
          <TestimonialImg src={Brownie1} alt="Poonam smiling" />
          <p>
            &quot;I had never climbed before. I was scared of heights. But I
            climbed and rang the bell all by myself and felt really proud of
            myself.&quot; —<strong> Poonam, 8</strong>
          </p>
        </TestimonialsBlockquote>
        <TestimonialsBlockquote aria-label="Testimonial from Jessica, aged 9">
          <TestimonialImg
            src={Brownie3}
            alt="Jessica enjoying outdoor activities"
          />
          <p>
            &quot;I like doing things outside... we get to learn about our
            environment and how to care for it.&quot; —
            <strong> Jessica, 9</strong>
          </p>
        </TestimonialsBlockquote>
      </Section>
      <Section>
        <StyledH2>Check our socials!</StyledH2>
        <AccessibleFbEmbed
          role="complementary"
          aria-label="Facebook Page Embed"
        >
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
              <a
                href="https://www.facebook.com/5th-Stowmarket-Brownies-100081302018670"
                aria-label="Visit 5th Stowmarket Brownies Facebook Page"
              >
                5th Stowmarket Brownies
              </a>
            </blockquote>
          </div>
        </AccessibleFbEmbed>
      </Section>
    </Main>
  );
};

export default Home;
