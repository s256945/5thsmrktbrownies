import React, { useState } from "react";
import styled from "styled-components";
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
  StyledH2,
  StyledH3,
} from "./StyledComponents.js";

const ActivitiesOverview = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ErrorMessage = styled.p`
  color: #d9534f;
  font-weight: bold;
  margin-top: 10px;
`;

const Parents = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = "Stowmarket5th#";

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter a password.");
      return;
    }
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Oops! Incorrect password. Please try again.");
    }
  };

  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Parents&apos; Hub</StyledH2>
          <p>Stay informed, stay connected!</p>
        </Overlay>
      </WelcomeSection>
      <Section>
        <StyledH2>Exclusively for parents and guardians</StyledH2>
        <p>
          To access important updates, event details, and resources, please
          enter the password provided in your starter pack.
        </p>
      </Section>
      <FormWrapper>
        {!isAuthenticated ? (
          <Form onSubmit={handlePasswordSubmit} className="space-y-4">
            <StyledH2>🔒 Parents Area - Password Protected</StyledH2>

            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Enter password for Parents Area"
              aria-required="true"
            />
            <Button type="submit">Unlock Access</Button>
            {error && <ErrorMessage aria-live="polite">{error}</ErrorMessage>}
          </Form>
        ) : (
          <Section>
            <StyledH2>🎉 Welcome to the Parents Area!</StyledH2>
            <p>
              You now have access to all the latest updates, event schedules,
              and resources tailored for you. Thanks for being part of the 5th
              Stowmarket Brownies family!
            </p>
            <ActivitiesOverview>
              <FadeIn>
                <Article>
                  <StyledH3>📖 New Starter Info</StyledH3>
                  <p>
                    Revisit all the information provided when your Brownie first
                    joined.
                  </p>
                </Article>
              </FadeIn>
              <FadeIn>
                <Article>
                  <StyledH3>📅 Termly Plans</StyledH3>
                  <p>
                    Download past termly plans.
                  </p>
                </Article>
              </FadeIn>
              <FadeIn>
                <Article>
                  <StyledH3>📄 Forms & Letters</StyledH3>
                  <p>
                    If you&apos;re missing a form or letter, you can find it
                    here.
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
