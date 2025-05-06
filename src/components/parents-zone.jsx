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
  padding-right: 35px;
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

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    const response = await fetch("/api/check-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const result = await response.json();

    if (result.valid) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Oops! Incorrect password. Please try again.");
    }
  };

  const resources = [
    {
      title: "📖 New Starter Info",
      description:
        "All the key information you received when your Brownie joined, available to download anytime.",
      files: [
        {
          name: "New Starter Pack",
          url: "/assets/files/new-starter-forms.pdf",
        },
      ],
    },
    {
      title: "⬆️ 9 Year olds letter",
      description: "What you need to know now your Brownie is 9 years old.",
      files: [
        {
          name: "9 Year old letter",
          url: "/assets/files/new-starter-forms.pdf",
        },
      ],
    },
    {
      title: "📅 Termly Plans",
      description:
        "Browse previous term plans to see what activities we've been up to.",
      files: [
        // {
        //   name: "Spring 2025 Plan",
        //   url: "/assets/files/spring-2025.pdf",
        // },
        // {
        //   name: "Summer 2025 Plan",
        //   url: "/assets/files/summer-2025.pdf",
        // },
      ],
    },
    {
      title: "📄 Forms & Letters",
      description:
        "Lost a form or need a letter again? Find and download it easily here.",
      files: [
        {
          name: "Pack Holiday 2025 Form",
          url: "/assets/files/pack-holiday-2025.docx",
        },
      ],
    },
  ];

  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Parents&apos; Hub</StyledH2>
          <p>Stay informed, stay connected!</p>
        </Overlay>
      </WelcomeSection>
      {!isAuthenticated ? (
        <>
          <Section>
            <StyledH2>Exclusively for parents and guardians</StyledH2>
            <p>
              To access important updates, event details, and resources, please
              enter the password provided in your starter pack.
            </p>
          </Section>
          <FormWrapper>
            <Form onSubmit={handlePasswordSubmit}>
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
          </FormWrapper>
        </>
      ) : (
        <Section>
          <StyledH2>🎉 Welcome to the Parents Area!</StyledH2>
          <p>
            You now have access to all the latest updates, event schedules, and
            resources tailored for you. Thanks for being part of the 5th
            Stowmarket Brownies family!
          </p>
          <ActivitiesOverview>
            {resources.map((resource, index) => (
              <FadeIn key={index}>
                <Article>
                  <StyledH3>{resource.title}</StyledH3>
                  <p>{resource.description}</p>
                  {resource.files.length === 1 ? (
                    <Button
                      as="a"
                      href={resource.files[0].url}
                      download
                      aria-label={`Download ${resource.files[0].name}`}
                    >
                      Download {resource.files[0].name}
                    </Button>
                  ) : (
                    <ul
                      style={{
                        paddingLeft: 0,
                        listStyle: "none",
                        marginTop: "10px",
                      }}
                    >
                      {resource.files.map((file, i) => (
                        <li key={i}>
                          <Button
                            as="a"
                            href={file.url}
                            download
                            aria-label={`Download ${file.name}`}
                            style={{ display: "block", marginBottom: "6px" }}
                          >
                            Download {file.name}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  )}
                </Article>
              </FadeIn>
            ))}
          </ActivitiesOverview>
        </Section>
      )}
    </Main>
  );
};

export default Parents;
