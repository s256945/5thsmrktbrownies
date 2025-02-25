import React from "react";
import styled from "styled-components";
import Footer from "./footer.jsx";
import {
  WelcomeSection,
  Main,
  Overlay,
  fadeInUp,
  Button,
  Input,
  Form,
  FormWrapper,
  StyledH2,
  Section,
} from "./StyledComponents";

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #a460a3;
  border-radius: 5px;
  background-color: #ffffff;
  resize: none;
  min-height: 120px;
  animation: ${fadeInUp} 0.6s ease-in-out forwards;
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    alert("Message Sent!");
  };

  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Get in Touch!</StyledH2>
          <p>We'd love to hear from you. Send us a message below!</p>
        </Overlay>
      </WelcomeSection>
      <Section>
        <StyledH2>Contact Us</StyledH2>
        <p>
          You can submit a message to us using the form below, or you can email{" "}
          <a href="mailto:fifthstowmarketbrownies@hotmail.com">
            fifthstowmarketbrownies@hotmail.com
          </a>{" "}
          directly.
        </p>
      </Section>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="👤 Your Name *"
            required
            aria-label="Your Name"
          />
          <Input
            type="email"
            placeholder="📧 Your Email *"
            required
            pattern="^[^@]+@[^@]+\.[^@]+$"
            aria-label="Your Email"
          />
          <TextArea
            placeholder="💬 Your Message *"
            rows="5"
            required
            aria-label="Your Message"
          />
          <Button type="submit">Send Message</Button>
        </Form>
      </FormWrapper>
    </Main>
  );
};

export default Contact;
