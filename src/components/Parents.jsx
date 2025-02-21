import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./footer.jsx";
import {
  Main,
  Input,
  Button,
  Form,
  FormWrapper,
  WelcomeSection,
  Overlay,
  Section,
  Article,
  FadeIn,
} from "./StyledComponents.js";

const ActivitiesOverview = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Parents = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = "Stowmarket5th#";

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      alert("Please enter a password.");
      return;
    }
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Oops! Incorrect password. Please try again.");
    }
  };

  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <h2>Parents' Hub</h2>
          <p>
            Stay informed, stay connected! Exclusively for parents and
            guardians.
          </p>
        </Overlay>
      </WelcomeSection>
      <FormWrapper>
        {!isAuthenticated ? (
          <Form onSubmit={handlePasswordSubmit} className="space-y-4">
            <h2>🔒 Parents Area - Password Protected</h2>
            <p>
              To access important updates, event details, and resources, please
              enter the password provided in your starter pack.
            </p>
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Unlock Access</Button>
          </Form>
        ) : (
          <Section>
            <h2>🎉 Welcome to the Parents Area!</h2>
            <p>
              You now have access to all the latest updates, event schedules,
              and resources tailored for you. Thanks for being part of the 5th
              Stowmarket Brownies family!
            </p>
            <ActivitiesOverview>
              <FadeIn>
                <Article>
                  <h3>New starter info</h3>
                  <p>
                    Here you can revisit all the info given out when your
                    daughter first joins our unit.
                  </p>
                </Article>
              </FadeIn>
              <FadeIn>
                <Article>
                  <h3>Termly plans</h3>
                  <p>
                    You can download all our past termly letters which include
                    the plans for that term.
                  </p>
                </Article>
              </FadeIn>
              <FadeIn>
                <Article>
                  <h3>Forms/letters</h3>
                  <p>
                    If you're missing a form or a letter, you can find it here.
                  </p>
                </Article>
              </FadeIn>
            </ActivitiesOverview>
          </Section>
        )}
      </FormWrapper>
    </Main>
  );
};

export default Parents;
