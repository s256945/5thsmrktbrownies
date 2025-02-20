import React from "react";
import styled, { keyframes } from "styled-components";
import Footer from "./footer.jsx";
import { WelcomeSection, Main, Overlay, fadeInUp, Button } from "./StyledComponents";

const ContactFormWrapper = styled.section`
  padding: 40px 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #a460a3;
  border-radius: 5px;
  background-color: #ffffff;
  animation: ${fadeInUp} 0.6s ease-in-out forwards;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #a460a3;
  border-radius: 5px;
  background-color: #ffffff;
  resize: none;
  animation: ${fadeInUp} 0.6s ease-in-out forwards;
`;

const Contact = () => {
  return (
    <Main>
      <WelcomeSection>
        <Overlay>
          <h2>Get in Touch!</h2>
          <p>We'd love to hear from you. Send us a message below!</p>
        </Overlay>
      </WelcomeSection>
      <ContactFormWrapper>
        <ContactForm>
          <Input type="text" placeholder="👤 Your Name *" required />
          <Input type="email" placeholder="📧 Your Email *" required />
          <TextArea placeholder="💬 Your Message *" rows="5" required />
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </ContactFormWrapper>
      <Footer />
    </Main>
  );
};

export default Contact;
