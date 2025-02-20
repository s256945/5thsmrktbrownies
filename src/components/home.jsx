import React from 'react';
import '../Home.css';

const Home = () => {
  return (
    <main>
      <section id="welcome">
        <h2>Welcome to our Brownies Unit!</h2>
      </section>
      <section id="introduction">
        <h2>What do Brownies do?</h2>
        <p>
          Brownies welcomes all girls from 7 to 10 years old for nonstop fun, learning, and adventure. It’s full of firsts: she might grow her first plant, cook her first cake, put up (and take down) her first tent, light her first fire, or go on her first fun-packed weekend away with guiding friends.
        </p>
        <div className="activities-overview">
          <article>
            <h3>Creative Adventures</h3>
            <p>
              She will explore her creative side and try exciting activities like building a robot or putting on a magic show.
            </p>
          </article>
          <article>
            <h3>Outdoor Exploration</h3>
            <p>
              Get outdoors, go on adventures, and experience nature first-hand with her guiding friends.
            </p>
          </article>
          <article>
            <h3>Building Skills</h3>
            <p>
              She’ll start learning important skills like teamwork, self-care, and helping others in the community.
            </p>
          </article>
        </div>
      </section>
      <section id="testimonials">
        <h2>What our Brownies say:</h2>
        <div className="testimonials">
          <blockquote>
            "I love Brownies because I get to try new things and make new friends!" — Sophie, 9
          </blockquote>
          <blockquote>
            "I had so much fun on our camping trip. I can't wait for the next adventure!" — Emma, 8
          </blockquote>
        </div>
      </section>
    </main>
  );
};

export default Home;
