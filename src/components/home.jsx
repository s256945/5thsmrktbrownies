import React from 'react';
import '../Home.css';
import Brownie1 from '../assets/Brownie1.png';
import Brownie3 from '../assets/Brownie3.png';

const Home = () => {
  return (
    <main>
      <section id="welcome">
        <div className="welcome-overlay">
          <h2>Welcome to our Brownies Unit!</h2>
          <p>Join us for fun, friendship, and adventure!</p>
          <a href="/join" className="cta-btn">Join Now</a>
        </div>
      </section>
      <section id="introduction">
        <h2>What do Brownies do?</h2>
        <p>
          Brownies welcomes all girls from 7 to 10 years old for nonstop fun, learning, and adventure. It’s full of firsts: she might grow her first plant, cook her first cake, put up (and take down) her first tent, light her first fire, or go on her first fun-packed weekend away with guiding friends.
        </p>
        <div className="activities-overview">
          <article className="fade-in">
            <h3>🎨 Creative Adventures</h3>
            <p>She will explore her creative side and try exciting activities like building a robot or putting on a magic show.</p>
          </article>
          <article className="fade-in">
            <h3>⛺ Outdoor Exploration</h3>
            <p>Get outdoors, go on adventures, and experience nature first-hand with her guiding friends.</p>
          </article>
          <article className="fade-in">
            <h3>🌟 Building Skills</h3>
            <p>She’ll start learning important skills like teamwork, self-care, and helping others in the community.</p>
          </article>
        </div>
      </section>
      <section id="testimonials">
        <h2>What our Brownies say:</h2>
        <div className="testimonials">
          <blockquote>
            <img src={Brownie1} alt="Sophie" className="testimonial-img" />
            "I love Brownies because I get to try new things and make new friends!" — Sophie, 9
          </blockquote>
          <blockquote>
            <img src={Brownie3} alt="Emma" className="testimonial-img" />
            "I had so much fun on our camping trip. I can't wait for the next adventure!" — Emma, 8
          </blockquote>
        </div>
      </section>
    </main>
  );
};

export default Home;
