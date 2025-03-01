import React, { useState } from "react";
import styled from "styled-components";
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
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #a460a3;
  border-radius: 5px;
  background-color: #ffffff;
  resize: none;
  min-height: 120px;
  animation: ${fadeInUp} 0.6s ease-in-out forwards;

  &:focus {
    border-color: #603d33;
    outline: 2px solid #603d33;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <StyledH2>Get in Touch!</StyledH2>
          <p>We&apos;d love to hear from you. Send us a message below!</p>
        </Overlay>
      </WelcomeSection>
      <Section>
        <StyledH2>Contact Us</StyledH2>
        <p>
          You can submit a message to us using the form below, or email{" "}
          <a href="mailto:fifthstowmarketbrownies@hotmail.com">
            fifthstowmarketbrownies@hotmail.com
          </a>{" "}
          directly.
        </p>
      </Section>
      <FormWrapper>
        {formSubmitted ? (
          <p role="alert" style={{ color: "#008000", fontWeight: "bold" }}>
            ✅ Message sent successfully!
          </p>
        ) : (
          <Form onSubmit={handleSubmit} aria-labelledby="contact-form-title">
            <StyledH2 id="contact-form-title">Send Us a Message</StyledH2>
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="👤 Enter your name"
              required
            />
            <Label htmlFor="email">Your Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="📧 Enter your email"
              required
              pattern="^[^@]+@[^@]+\.[^@]+$"
              aria-describedby="email-desc"
            />
            <p id="email-desc" style={{ fontSize: "0.8rem", color: "#555" }}>
              Please enter a valid email address (e.g., name@example.com).
            </p>
            <Label htmlFor="message">Your Message *</Label>
            <TextArea
              id="message"
              placeholder="💬 Type your message here"
              required
            />
            <Button type="submit">Send Message</Button>
          </Form>
        )}
      </FormWrapper>
    </Main>
  );
};

export default Contact;
