import React, { useState } from "react";
import Footer from "./footer.jsx";
import {
  Main,
  Input,
  Button,
  Form,
  FormWrapper,
  WelcomeSection,
  Overlay,
} from "./StyledComponents.js";

const Parents = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = "Stowmarket5th#";

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
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
          <div>
            <h2>🎉 Welcome to the Parents Area!</h2>
            <p>
              You now have access to all the latest updates, event schedules,
              and resources tailored for you. Thanks for being part of the 5th
              Stowmarket Brownies family!
            </p>
            <Footer />
          </div>
        )}
      </FormWrapper>
    </Main>
  );
};

export default Parents;
