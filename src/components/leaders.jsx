import React from "react";
import styled from "styled-components";
import Leader3 from "../../public/assets/images/Leader3.png";
import YoungLeader from "../../public/assets/images/YL4.png";

import {
  Main,
  Section,
  Overlay,
  FadeIn,
  WelcomeSection,
  Article,
  StyledH2,
  StyledH3,
} from "./StyledComponents";

const LeaderGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
  padding: 20px 16px;
  scroll-padding: 20px 16px;
`;

const ArticleStyled = styled(Article)`
  flex: 1 1 0;
  min-width: 300px;
  max-width: 360px;
`;

const LeaderImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Leaders = () => {
  const leaderTeam = [
    {
      name: "🌟 Amy",
      role: "Unit Leader",
      img: Leader3,
      description:
        "Amy has been part of Girlguiding since she was a Brownie, going on to Guides, Rangers, and volunteering from age 14. She became Unit Leader in February 2025 and holds her Leadership Qualification, First Response training, and Going Away With licence. Amy also supports the wider area as a County Peer Education Coordinator. With over 100 nights away and a visit to Our Chalet in Switzerland, she’s not sure how many tents she’s pitched—but it’s definitely a lot! She loves outdoor activities and seeing girls grow in confidence and independence —just as Guiding helped her.",
    },
    {
      name: "🔆 Stacey",
      role: "Unit Helper",
      img: Leader3,
      description:
        "Stacey was a Brownie herself and returned to Guiding to volunteer alongside Amy. Since joining, she’s become an essential part of the team—helping to plan creative, engaging sessions and bringing a calm, caring presence to every meeting. Stacey is brilliant at supporting girls individually and delivering fun activities with warmth and confidence. The girls love chatting with her and see her as a trusted, encouraging role model.",
    },
    {
      name: "🐣 Abigail",
      role: "Young Leader",
      img: YoungLeader,
      description:
        "Abigail started her journey as a Brownie in this very unit and returned to help as a Guide helper. Now a Ranger and Young Leader, she brings fun, energy, and relatability to every session. The girls look up to her and she’s brilliant at jumping in to lead games, help girls join in, or simply offer a friendly ear. With a great sense of humour and natural leadership potential, Abigail is developing her skills every week while helping younger girls feel right at home in the unit.",
    },
  ];

  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Meet Our Leadership Team</StyledH2>
          <p>
            Volunteers making every Brownies meeting fun, safe, and full of
            adventure.
          </p>
        </Overlay>
      </WelcomeSection>
      <Section>
        <StyledH2>Who Runs Our Unit?</StyledH2>
        <p>
          From leading crafts and games to organising trips and encouraging new
          skills, our leadership team works together to make every meeting safe,
          supportive, and packed with fun. We’re here to give every Brownie the
          chance to grow, laugh, and explore in a space where they belong.
        </p>
      </Section>
      <LeaderGrid>
        {leaderTeam.map((leader) => (
          <FadeIn key={leader.name}>
            <ArticleStyled>
              <LeaderImg src={leader.img} alt={`${leader.name} profile`} />
              <StyledH3>{leader.name}</StyledH3>
              <p>
                <strong>{leader.role}</strong>
              </p>
              <p>{leader.description}</p>
            </ArticleStyled>
          </FadeIn>
        ))}
      </LeaderGrid>
    </Main>
  );
};

export default Leaders;
