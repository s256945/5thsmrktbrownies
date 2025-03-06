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

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled(Input)`
  width: 100%;
  padding-right: 35px; /* Space for the button */
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  color: #555;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #000;
  }
`;

const Parents = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
            <InputWrapper>
              <StyledInput
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ToggleButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </ToggleButton>
            </InputWrapper>
            <Button type="submit">Unlock Access</Button>
            {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
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
                  <p>Download past termly plans.</p>
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
