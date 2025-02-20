import React from "react";
import "../Home.css";
import Brownie6 from "../assets/Brownie6.png";
import Leader3 from "../assets/Leader3.png";
import Footer from "./footer.jsx";

const Join = () => {
  return (
    <main>
      <section id="join-welcome">
        <div className="welcome-overlay">
          <h2>Join Us Today!</h2>
          <p>Be part of the adventure and fun at Brownies!</p>
        </div>
      </section>
      <section id="join-intro">
        <h2>How to Join</h2>
        <p>
          Whether you want to become a Brownie or volunteer, there's a place for
          you!
        </p>
      </section>
      <section className="join-options">
        <article className="fade-in">
          <img src={Brownie6} alt="Brownie Girl" className="join-img" />
          <h3>🎀 Join as a Brownie</h3>
          <p>
            Brownies is full of fun, learning, and adventure! Girls in Guiding
            are 23% more confident and 3x more likely to contribute to their
            community.
          </p>
          <a
            href="https://go.girlguiding.org.uk/join-us/join-as-member/"
            className="cta-btn"
          >
            Register your daughter
          </a>
        </article>
        <article className="fade-in">
          <img src={Leader3} alt="Volunteer Helping" className="join-img" />
          <h3>🤝 Join as a Volunteer</h3>
          <p>
            Help all girls know they can do anything by volunteering with us.
            Make a difference and be part of the guiding community!
          </p>
          <a
            href="https://www.girlguiding.org.uk/link/f1b25a35c49d43768df10777201c3475.aspx"
            className="cta-btn"
          >
            Register to volunteer
          </a>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Join;
