import styled, { keyframes } from "styled-components";
import BackgroundImage from "../assets/BrowniesGroup.jpg";

export const Main = styled.main`
  padding: 20px;
  background-color: #ffffff;
  flex-grow: 1;
`;

export const Section = styled.section`
  text-align: center;
  padding: 20px;
`;

export const WelcomeSection = styled(Section)`
  background: url(${BackgroundImage}) center/cover no-repeat;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  h2,
  p {
    color: white;
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  color: white;
`;

export const Button = styled.a`
  display: inline-block;
  background-color: #ef7b00;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 10px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #007844;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FadeIn = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeInUp} 0.6s ease-in-out forwards;
`;

export const Article = styled.article`
flex: 1;
padding: 20px;
background-color: #f9f9f9;
border-radius: 10px;
border: 1px solid #a460a3;
text-align: center;
transition: transform 0.3s ease;
max-width: 400px;

&:hover {
  transform: scale(1.05);
}
`;